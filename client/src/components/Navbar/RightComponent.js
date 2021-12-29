import React from 'react'
import Alert from '../Alert/Alert';
import { Link, useLocation } from "react-router-dom";

export const RightComponent = () => {

    let location = useLocation();

    const onClick = () => {
        localStorage.removeItem('token');
        Alert("Success", "Logged out successfully")
    }

    return (
        <>
            {localStorage.getItem('token')
                ?
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <Link className={`nav-link ${location.pathname === '/login' ? 'text-primary' : ''}`} aria-current="page" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/signup' ? 'text-primary' : ''}`} to="/signup">Signup</Link>
                    </li>
                </ul>
                :
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <Link aria-current="page" to="/history"><i className="fas fa-history mx-2"></i></Link>
                    </li>
                    <li className="nav-item ">
                        <Link aria-current="page" to="/upload"><i className="fas fa-upload mx-2" ></i></Link>
                    </li>
                    <li className="nav-item ">
                        <Link aria-current="page" to="/cart"><i className="fas fa-shopping-cart mx-2"></i></Link>
                    </li>
                    <li className="nav-item ">
                        <Link className='nav-link text-danger' aria-current="page" to="/login" onClick={onClick}>Logout</Link>
                    </li>
                    <li className="nav-item ">
                        <i className="fas fa-sign-out-alt " onClick={onClick} style={{ color: "red" }}></i>
                    </li>
                </ul>}
        </>
    )
}
