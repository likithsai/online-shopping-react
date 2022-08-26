//  loginOffcanvas.js

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/loginActions.js";

const RegisterModal = (props) => {
    const [ email, setEmail ] = useState();
    const [ pass, setPass ] = useState();
    const dispatch = useDispatch();

    return (
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
                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark">
                                <i className="bi bi-box-arrow-in-right me-2"></i>
                                <span>Sign In</span>
                            </button>
                            <hr className="my-4" />
                            <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3">Not a user, Register</button>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModal; 