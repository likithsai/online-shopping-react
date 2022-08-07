//  loginOffcanvas.js

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

const loginModal = (props) => {
    return (
        <Modal {...props}>
            <Modal.Body className="p-0">
                <ul class="nav nav-pills nav-fill bg-dark text-white" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active rounded-0 text-white" id="login-tab" data-bs-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">
                            <span>Login</span>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link rounded-0 text-white" id="register-tab" data-bs-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">
                            <span>Profile</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                        <div class="modal modal-signin position-static d-block bg-dark py-5" tabindex="-1" role="dialog" id="modalSignin">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header p-5 pb-4 border-bottom-0">
                                        <h2 class="fw-bold mb-0">Sign In</h2>
                                    </div>

                                    <div class="modal-body p-5 pt-0">
                                        <form class="">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">
                                                <i class="bi bi-box-arrow-in-right me-2"></i>
                                                <span>Sign In</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <div class="modal modal-signin position-static d-block bg-dark py-5" tabindex="-1" role="dialog" id="modalSignin">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header p-5 pb-4 border-bottom-0">
                                        <h2 class="fw-bold mb-0">Register</h2>
                                    </div>

                                    <div class="modal-body p-5 pt-0">
                                        <form class="">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">
                                                <i class="bi bi-box-arrow-in-right me-2"></i>
                                                <span>Register</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default loginModal;