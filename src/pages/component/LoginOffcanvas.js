//  loginOffcanvas.js

import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const loginOffcanvas = (props) => {
    return (
        <Offcanvas {...props} className="vh-100">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title />
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div class="modal-header p-0 p-md-5 pt-0 pt-md-3 pb-4 pb-md-4 border-bottom-0">
                    <h2 class="fw-bold mb-0">Sign In</h2>
                </div>

                <div class="modal-body p-0 p-md-5 pt-0 pt-md-0">
                    <form class="">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">
                            <i class="bi bi-box-arrow-in-right me-2"></i>
                            <span>Sign In</span>
                        </button>
                    </form>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default loginOffcanvas;