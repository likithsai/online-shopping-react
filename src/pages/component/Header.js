//  header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const history = useNavigate();

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
                        <span className="badge bg-dark text-white ms-1 rounded-pill">2</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;