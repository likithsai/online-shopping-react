//  RegisterPage.js

import React from 'react';

const RegisterPage = (props) => {
    return (
        <div class="modal modal-signin position-static d-block bg-dark py-5 vh-100" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <h2 class="fw-bold mb-0">Sign Up</h2>
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
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Confirm Password" />
                                <label for="floatingPassword">Confirm Password</label>
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">
                                <i class="bi bi-check-circle-fill me-2"></i>
                                <span>Sign up</span>
                            </button>
                            <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;