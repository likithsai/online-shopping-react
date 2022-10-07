//  header.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/loginActions.js";
import LoginModal from "../component/LoginModal";
import Link from "next/link";

const Header = (props) => {
    const history = useRouter();
    const cartItems = useSelector((state) => state.cartItems);
    const loginSession = useSelector((state) => state.loginSession);
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(cartItems.items.length);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        setCartCount(cartItems.items.length);
    }, [cartItems]);

    return (
        <>
            <LoginModal
                show={showLoginModal}
                onHide={() => setShowLoginModal(false)}
                onSuccessCallback={(data) => setShowLoginModal(false)}
            />
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row p-0">
                    { 
                        loginSession.isLoggedIn ? (
                            <ul className="list-group list-group-flush w-100 p-0">
                                <li className="list-group-item p-3 bg-light d-flex align-items-center justify-content-between border-bottom-0">
                                    <div class="alert alert-primary w-100 m-0" role="alert">A simple primary alert—check it out!</div>
                                </li>
                                <Link href="/orders">
                                    <li className="list-group-item bg-light d-flex align-items-center justify-content-between px-4">
                                        <div>
                                            <i className="bi bi-list me-3"></i>
                                            <span>Orders</span>
                                        </div>
                                        <span className="badge bg-dark text-white ms-1 px-2 rounded-pill">
                                            <span>{cartCount}</span>
                                        </span>
                                    </li>
                                </Link>
                                <li
                                    className="list-group-item bg-light px-4"
                                    onClick={() => {
                                        dispatch(logout([]));
                                        window.location.reload();
                                    }}
                                >
                                    <i className="bi bi-box-arrow-right me-3"></i>
                                    <span className="text-danger fw-bold">
                                        Logout
                                    </span>
                                </li>
                            </ul>
                        ) : (
                            <ul className="list-group list-group-flush w-100 p-0">
                                <Link href="/orders">
                                    <li className="list-group-item bg-light d-flex align-items-center justify-content-between px-4 text-center">
                                        <span>Login</span>
                                    </li>
                                </Link>
                            </ul>
                        )
                    }
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-sticky fixed-top w-100 z-index border-bottom">
                <div className="container px-0 px-lg-5 d-flex align-items-center justify-content-between">
                    <a class="btn d-lg-none" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation" role="button">
                        <i class="bi bi-list fs-3"></i>
                    </a>
                    <Link href="/" className="text-decoration-none">
                        <div className="navbar-brand fw-bold">
                            <i className="bi bi-box-seam-fill me-3"></i>
                            <span>{props.headerTitle}</span>
                        </div>
                    </Link>
                    <div className="d-flex align-items-center">
                        <Link href={props.cartURL}>
                            {/* <button className="btn d-none d-lg-block d-flex align-items-center me-1">
                                <i className="bi bi-cart me-2"></i>
                                <span>{cartCount}</span>
                            </button> */}

                            <a class="nav-icon position-relative text-decoration-none mx-4" href="#">
                                <i class="bi bi-cart4 fs-5 text-dark mr-1"></i>
                                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-dark text-white">{cartCount}</span>
                            </a>
                        </Link>
                        {loginSession.isLoggedIn ? (
                            <>
                                <Dropdown className="btn d-none d-lg-block m-0">
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        <i className="bi bi-person me-2"></i>
                                        <span>
                                            {loginSession.user[0].userName}
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <i className="bi bi-list me-3"></i>
                                            <span>Orders</span>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={() => { dispatch(logout([])); }}>
                                            <i className="bi bi-box-arrow-in-right me-3"></i>
                                            <span className="text-danger fw-bold">Logout</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-dark d-none d-lg-block" onClick={() => setShowLoginModal(true)}>
                                    <i className="bi bi-person me-2"></i>
                                    <span>Login</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
