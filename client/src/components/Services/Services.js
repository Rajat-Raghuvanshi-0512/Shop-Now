import React, { useState } from 'react'
import Alert from '../Alert/Alert';

function Services() {

    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    const handleOnClick = async (e) => {
        e.preventDefault();
        if (userData.name && userData.email && userData.phone && userData.message) {
            Alert("Success", "Message sent successfully!")
        }
        else {
            Alert("Error", "All fields must be filled!")

        }
        setUserData({ ...userData, message: "" })
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center my-4">

                <div className="wrapper">
                    <header>Contact Us</header>
                    <form method="post">
                        <div className="dbl-field">
                            <div className="field">
                                <input type="text" name="name" value={userData.name} onChange={handleInput} placeholder="Enter your name" />
                                <i className='fas fa-user'></i>
                            </div>
                            <div className="field">
                                <input type="text" name="email" value={userData.email} onChange={handleInput} placeholder="Enter your email" />
                                <i className='fas fa-envelope'></i>
                            </div>
                        </div>
                        <div className="dbl-field">
                            <div className="field">
                                <input type="text" name="phone" value={userData.phone} onChange={handleInput} placeholder="Enter your phone" />
                                <i className='fas fa-phone-alt'></i>
                            </div>
                        </div>
                        <div className="message">
                            <i className="fal fa-comment-alt-lines"></i>
                            <textarea onChange={handleInput} value={userData.message} placeholder="Write your message" name="message"></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit" onClick={handleOnClick} >Send Message</button>
                            <span></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Services;