import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Alert from '../Alert/Alert';
function Login() {
    const Port = 8000;
    const host = `http://localhost:${Port}`

    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginMe = async () => {

        const res = await fetch(`${host}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        localStorage.setItem('token', data.toString())
        if (res.status === 400 || !data) {
            Alert("Error", "Invalid Credentials")
        }
        else {
            Alert("Success", "Login Successful");
            history.push('/');
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center my-4">

            <div className="centerss">
                <h1>Log-In</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type="email" required name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required name="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <button type="button" className="btnn" onClick={() => LoginMe()} >Login</button>
                    <div className="signup_link">
                        Not a member? <Link to="/signup">Sign-up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
