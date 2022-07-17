//  header.js
import React from 'react';

const Header = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div class="container px-4 px-lg-5 d-flex align-items-center justify-content-between">
                <a class="navbar-brand fw-bold" href="#!">
                    <i class="bi-cart-fill me-2"></i>
                    <span>{props.headerTitle}</span>
                </a>
                <div>
                    <button class="btn">
                        <span>Cart</span>
                        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;