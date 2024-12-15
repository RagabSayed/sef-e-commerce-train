import React from 'react';
import { CiLogin } from "react-icons/ci";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-custimize">
                <div className="container-fluid mx-md-5">
                    <a className="navbar-brand d-md-none" href="/">E-commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row" id="navbarTogglerDemo01">
                        <div className="d-xs-none d-md-block col-md-4 mx-auto">
                            <a className="navbar-brand fs-2" href="/">E-commerce</a>
                        </div>
                        <div className="col-md-4 col-xs-5">
                            <h4 className=" text-light link-shadow"><sub>www.</sub>BANDICAM<sub>.com</sub></h4>
                            <div className="d-block ms-auto">
                            <ul className="navbar-nav mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="/products">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="/about" >About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="cotact">Contact</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0 col-md-4 col-xs-5 ms-auto">
                            <li className="nav-item p-2 border border-dark rounded">
                                <CiLogin className="mt-2 fs-3 fw-bold" />
                                <a className="nav-link float-end" href="/login">Login</a>
                            </li>
                            <li className="nav-item p-2 border border-dark rounded mx-3">
                                <BsPersonFillAdd className="mt-2 fs-3 fw-bold" />
                                <a className="nav-link float-end" href="/register">Register</a>
                            </li>
                            <li className="nav-item p-2 border border-dark rounded">
                                <FaShoppingCart className="mt-2 fs-3 fw-bold" />
                                <a className="nav-link float-end" href="/cart" >Cart</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;