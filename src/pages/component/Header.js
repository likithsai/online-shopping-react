//  header.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const history = useNavigate();
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(() => {
        setCartCount((JSON.parse(localStorage.getItem('cartData')) !== null) ? JSON.parse(localStorage.getItem('cartData')).length : 0);
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container px-4 px-lg-5 d-flex align-items-center justify-content-between">
                <a className="navbar-brand fw-bold" href={props.logoURL}>
                    <i className="bi-cart-fill me-2"></i>
                    <span>{props.headerTitle}</span>
                </a>
                <div>
                    <button className="btn" onClick={() => history(props.cartURL)}>
                        <span>Cart</span>
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{ cartCount }</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;