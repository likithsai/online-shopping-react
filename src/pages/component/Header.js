//  header.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const Header = (props) => {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [ cartCount, setCartCount ] = useState(cartItems.items.length);

    useEffect(() => {
        setCartCount(cartItems.items.length);
    }, [cartItems.items]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-sticky fixed-top w-100 z-index">
            <div className="container px-4 px-lg-5 d-flex align-items-center justify-content-between">
                <a className="navbar-brand fw-bold" onClick={() => history(props.logoURL)}>
                    <i className="bi-cart-fill me-2"></i>
                    <span>{props.headerTitle}</span>
                </a>
                <div>
                    <button className="btn" onClick={() => history(props.cartURL)}>
                        <span>Cart</span>
                        <span className="badge bg-dark text-white ms-1 px-2 rounded-pill">
                            <span>{ cartCount }</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;