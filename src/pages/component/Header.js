//  header.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "./LoginModal";
import Dropdown from 'react-bootstrap/Dropdown';
import { logout } from "../../actions/loginActions.js";

const Header = (props) => {
    const cartItems = useSelector((state) => state.cartItems);
    const loginSession = useSelector((state) => state.loginSession);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [ cartCount, setCartCount ] = useState(cartItems.items.length);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        setCartCount(cartItems.items.length);
    }, [cartItems.items]);

    return (
        <nav className="header">
            <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} onSuccessCallback={() => setShowLoginModal(false)} />
            <div class="collapse bg-dark" id="navbarHeader">
                <div class="container">
                    <div class="row p-0">
                        <ul class="list-group list-group-flush w-100 p-0">
                            <li class="list-group-item bg-light d-flex align-items-center justify-content-between px-4">
                                <div>
                                    <i class="bi bi-list me-3"></i>
                                    <span>Orders</span>
                                </div>
                                <span className="badge bg-dark text-white ms-1 px-2 rounded-pill">
                                    <span>{ cartCount }</span>
                                </span>
                            </li>
                            <li class="list-group-item bg-light px-4" onClick={() => { 
                                dispatch(logout([]))
                            }}>
                                <i class="bi bi-box-arrow-right me-3"></i>
                                <span className="text-danger fw-bold">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-sticky fixed-top w-100 z-index">
                <div className="container px-4 px-lg-5 d-flex align-items-center justify-content-between">
                    <a className="navbar-brand fw-bold" onClick={() => history(props.logoURL)}>
                        <i className="bi-cart-fill me-2"></i>
                        <span>{props.headerTitle}</span>
                    </a>
                    <div className="d-flex">
                        <button className="btn" onClick={() => history(props.cartURL)}>
                            <span>Cart</span>
                            <span className="badge bg-dark text-white ms-1 px-2 rounded-pill">
                                <span>{ cartCount }</span>
                            </span>
                        </button>
                        {
                            (loginSession.isLoggedIn) ? (
                                <Dropdown className="btn d-none d-lg-block m-0">
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">{ loginSession.user[0].userName }</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <i class="bi bi-list me-3"></i>
                                            <span>Orders</span>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={() =>  { 
                                            dispatch(logout([]))
                                        }}>
                                            <i class="bi bi-box-arrow-in-right me-3"></i>
                                            <span className="text-danger fw-bold">Logout</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <button className="btn btn-dark d-none d-lg-block" onClick={() => setShowLoginModal(true)}>
                                    <span>Login</span>
                                </button>
                            )
                        }
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="bi bi-person-circle"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;