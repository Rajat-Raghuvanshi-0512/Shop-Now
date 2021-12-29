import React from 'react'
import { Link } from "react-router-dom";
// import { RightComponent } from './RightComponent';

export default function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-4 " to="/"><i className="fab fa-shopware" style={{ fontSize: "30px" }}>  ShopNow</i></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link aria-current="page" to="/history"><i className="fas fa-history mx-2"> Prev. Orders</i></Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link aria-current="page" to="/cart"><i className="fas fa-shopping-cart mx-2"> Cart </i></Link>
                                </li>
                            </ul>
                            {/* <RightComponent /> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
