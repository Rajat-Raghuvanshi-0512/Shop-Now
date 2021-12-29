import React from 'react'
import { Link, useLocation } from "react-router-dom";

const NavMini = () => {

    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 sticky ">
                <div className="container">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">All</Link>
                            </li>
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/category/electronics' ? 'active' : ''}`} to="/category/electronics">Electronics</Link>
                            </li>
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/category/wclothing' ? 'active' : ''}`} to="/category/wclothing">Women Clothing</Link>
                            </li>
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/category/mclothing' ? 'active' : ''}`} to="/category/mclothing">Men Clothing</Link>
                            </li>
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/category/jewelery' ? 'active' : ''}`} to="/category/jewelery">Jewelery</Link>
                            </li>
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/history' ? 'active' : ''}`} to="/history">History</Link>
                            </li>
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Customer Service</Link>
                            </li>
                            <li className="navmini-li">
                                <Link className={`navmini-link ${location.pathname === '/voulchers/giftcard' ? 'active' : ''}`} to="/voulchers/giftcard">Gift Cards</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavMini;
