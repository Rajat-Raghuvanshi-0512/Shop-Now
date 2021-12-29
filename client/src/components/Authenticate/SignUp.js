import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function SignUp() {

    const history = useHistory();
    const [details, setDetails] = useState({
        name: "", email: "", phone: "", profession: "", password: "", cpassword: ""
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDetails({ ...details, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, profession, password, cpassword } = details;

        const res = await fetch("/bregister", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, profession, password, cpassword
            })
        })

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Registration failed");
        }
        else {
            window.alert("Registration Successful")
            history.push("/login")
        }
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center my-4">
                <div className="containerss">
                    <div className="title">Registration</div>
                    <div className="content">
                        <form method="post">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" name="name" placeholder="Enter your name" value={details.name} onChange={handleInput} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Profession</span>
                                    <input type="text" name="profession" placeholder="Enter your profession" value={details.profession} onChange={handleInput} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="email" name="email" placeholder="Enter your email" value={details.email} onChange={handleInput} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="tel" name="phone" placeholder="Enter your phone number" value={details.phone} onChange={handleInput} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="password" name="password" autoComplete="off" placeholder="Enter your password" value={details.password} onChange={handleInput} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input type="password" name="cpassword" autoComplete="off" placeholder="Confirm your password" value={details.cpassword} onChange={handleInput} required />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" onClick={PostData} />
                            </div>
                            <div className="signin_link">
                                Already a member? <Link to="/login">Sign-in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
