//  loginOffcanvas.js

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions/loginActions";
import Util from '../Utils/utility';
import Alert from 'react-bootstrap/Alert';

const LoginModal = (props) => {
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState();
    const [ pass, setPass ] = useState();
    const [ registerUsername, setRegisterUsername ] = useState();
    const [ registerEmail, setRegisterEmail ] = useState();
    const [ registerPassword, setRegisterPassword ] = useState(); 
    const [ registerConfirmPassword, setRegisterConfirmPassword ] = useState();
    const [ showRegisterModal, setShowRegisterModal ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    const submitRegisterForm = async(event) => {
        event.preventDefault();
        await Util.fetchData(`/api/registeruser`, { 'username': registerUsername, 'useremail': registerEmail, 'userpass': registerPassword }, (data) => {
            setShowRegisterModal(false);
        });
        props.onSuccessCallback();
    }

    const submitLoginForm = async(event) => {
        event.preventDefault();

        await Util.fetchData('/api/users', { 'useremail': email, 'userpass': pass }, (data) => {
            console.log(data.message[0]);
            if(data.message.length > 0) {
                dispatch(
                    login({
                        isLoggedIn: true, 
                        user: [{ 
                            userId: data.message[0].user_id,
                            userName: data.message[0].user_name, 
                            userEmail: data.message[0].user_email
                        }]
                    })
                );
                props.onSuccessCallback();
            } else {
                setIsError(true);
            }
        });
    }

    return (
        <>
            <Modal {...props} centered fullscreen='sm-down'>
                <Modal.Body className="p-0">
                    <div className="modal-content">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h2 className="fw-bold mb-0">Sign In</h2>
                        </div>

                        <div className="modal-body p-5 pt-0">

                            {
                                (isError) ? (
                                    <Alert key="danger" variant="danger" className="mb-3">Username and password doesnt match!</Alert>
                                ) : null
                            }
                            
                            <form onSubmit={submitLoginForm}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">
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

            <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} centered fullscreen='sm-down'>
                <Modal.Body className="p-0">
                    <div className="modal-content">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h2 className="fw-bold mb-0">Sign Up</h2>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form onSubmit={submitRegisterForm}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-3" id="floatingName" placeholder="name" onChange={(e) => setRegisterUsername(e.target.value)} />
                                    <label htmlFor="floatingName">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingEmail" placeholder="name@example.com" onChange={(e) => setRegisterEmail(e.target.value)} />
                                    <label htmlFor="floatingEmail">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingConfirmPassword" placeholder="Confirm Password" onChange={(e) => setRegisterConfirmPassword(e.target.value)} />
                                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
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
