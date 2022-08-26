//  loginOffcanvas.js

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/loginActions.js";

const LoginModal = (props) => {
    const [ email, setEmail ] = useState();
    const [ pass, setPass ] = useState();
    const dispatch = useDispatch();
    const [ showRegisterModal, setShowRegisterModal ] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        dispatch(
            login({
                isLoggedIn: true, 
                user: [{ 
                    userName: 'likith sai', 
                    userEmail: email 
                }]
            })
        );

        props.onSuccessCallback();
    }

    return (
        <>
            <Modal {...props}>
                <Modal.Body className="p-0">
                    <div className="modal-content">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h2 className="fw-bold mb-0">Sign In</h2>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" onClick={(e) => submitForm(e)}>
                                    <i className="bi bi-arrow-right-circle-fill me-2"></i>
                                    <span>Sign In</span>
                                </button>
                                {/* <hr className="my-4" /> */}
                                <button className="w-100 py-2 mb-2 btn rounded-3" onClick={(e) => { 
                                    e.preventDefault();
                                    setShowRegisterModal(true)
                                }}>Not a user, Register</button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} onSuccessCallback={() => setShowRegisterModal(false)}>
                <Modal.Body className="p-0">
                    <div className="modal-content">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h2 className="fw-bold mb-0">Sign Up</h2>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name" />
                                    <label for="floatingInput">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Confirm Password" />
                                    <label for="floatingPassword">Confirm Password</label>
                                </div>
                                <div className="mt-3 mb-4 text-center">
                                    <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">
                                    <i className="bi bi-check-circle-fill me-2"></i>
                                    <span>Sign up</span>
                                </button>
                                <button className="w-100 py-2 mb-2 btn rounded-3" onClick={(e) => {
                                    e.preventDefault();
                                    setShowRegisterModal(false);
                                }}>Existing user, Login</button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal; 
