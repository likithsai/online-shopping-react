//  header.js
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../component/LoginModal";
import { logout } from "../store/actions/loginActions.js";

const Header = (props) => {
    const history = useRouter();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartItems);
    const loginSession = useSelector((state) => state.loginSession);
    const [cartCount, setCartCount] = useState(cartItems.items.length);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);

    useEffect(() => {
        setCartCount(cartItems.items.length);
    }, [cartItems]);

    return (
        <>
            {/* <LoginModal
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
                                        <div className="alert alert-primary w-100 m-0" role="alert">Welcome {loginSession.user[0].userName}</div>
                                    </li>
                                    <Link href="/favorates">
                                        <li className="list-group-item bg-light d-flex align-items-center justify-content-between px-4">
                                            <div>
                                                <i className="bi bi-star me-3"></i>
                                                <span>Favorates</span>
                                            </div>
                                            <span className="badge bg-dark text-white ms-1 px-2 rounded-pill">
                                                <span>{cartCount}</span>
                                            </span>
                                        </li>
                                    </Link>
                                    <Link href="/orders">
                                        <li className="list-group-item bg-light d-flex align-items-center justify-content-between px-4">
                                            <div>
                                                <i className="bi bi-bag-plus me-3"></i>
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
                                    <li className="list-group-item bg-light px-3 border-bottom" onClick={() => setShowLoginModal(true)}>
                                        <i className="bi bi-person-fill me-2"></i>
                                        <span>Login</span>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-sticky fixed-top w-100 z-index border-bottom">
                <div className="container px-0 px-lg-5 d-flex align-items-center justify-content-between">
                    <a className="btn d-lg-none" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation" role="button">
                        <i className="bi bi-list fs-3"></i>
                    </a>
                    <Link href="/" className="text-decoration-none align-items-center">
                        <div className="navbar-brand fw-bold m-0">
                            <i className="bi bi-box-seam-fill me-2"></i>
                            <span>{props.headerTitle}</span>
                        </div>
                    </Link>
                    <div className="d-flex align-items-center">
                        <Link href={props.cartURL}>
                            <a className="nav-icon position-relative text-decoration-none mx-4 mt-2" href="#">
                                <i className="bi bi-cart4 fs-5 text-dark mr-1"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-dark text-white">{cartCount}</span>
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
                                            <Link href="/favorates">
                                                <div>
                                                    <i className="bi bi-star me-3"></i>
                                                    <span>Favorates</span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>
                                            <Link href="/orders">
                                                <div>
                                                    <i className="bi bi-bag-plus me-3"></i>
                                                    <span>Orders</span>
                                                </div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={() => { dispatch(logout([])); }}>
                                            <i className="bi bi-box-arrow-in-right me-3"></i>
                                            <span className="text-danger fw-bold">Logout</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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
            </nav> */}

            <nav id="header" class="w-full z-30 sticky top-0 bg-white shadow-sm">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between px-6 py-3">
                    <div class="flex items-center w-auto order-1" id="menu">
                        <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </div>

                    <div class="order-2">
                        <div class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                            <svg class="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                            </svg>
                            <span>{props.headerTitle}</span>
                        </div>
                    </div>

                    <div class="order-3 flex items-center" id="nav-content">
                        <div class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                            </svg>
                        </div>
                        <div class="pl-3 inline-block no-underline hover:text-black">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                                <circle cx="10.5" cy="18.5" r="1.5" />
                                <circle cx="17.5" cy="18.5" r="1.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default memo(Header);
