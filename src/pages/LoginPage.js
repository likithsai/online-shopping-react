//  loginpage.js

import React from 'react';

const loginpage = (props) => {
    return (
        <div class="modal modal-signin position-static d-block bg-dark py-5 vh-100" tabindex="-1" role="dialog" id="modalSignin">
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
                            <hr class="my-4" />
                            <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" onClick={() =>alert('clicked')}>Not a user, Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default loginpage;