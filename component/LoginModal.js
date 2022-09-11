//  loginOffcanvas.js

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const LoginModal = (props) => {
  const [registerUsername, setRegisterUsername] = useState();
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const fetchData = async (url, params, callback) => {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    const response = await fetch(url, settings);
    const data = await response.json();
    callback(data);
  };

  const submitRegisterForm = async (event) => {
    event.preventDefault();
    await fetchData(
      `/api/registeruser`,
      {
        username: registerUsername,
        useremail: registerEmail,
        userpass: registerPassword,
      },
      (data) => {
        setShowRegisterModal(false);
      }
    );
    props.onSuccessCallback();
  };

  const submitLoginForm = async (event) => {
    event.preventDefault();
    props.onSuccessCallback();
  };

  return (
    <>
      <Modal {...props}>
        <Modal.Body className="p-0">
          <div className="modal-content">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h2 className="fw-bold mb-0">Sign In</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={submitLoginForm}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-dark"
                  type="submit"
                >
                  <i className="bi bi-arrow-right-circle-fill me-2"></i>
                  <span>Sign In</span>
                </button>
                <button
                  className="w-100 py-2 mb-2 btn rounded-3"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRegisterModal(true);
                  }}
                >
                  Not a user, Register
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showRegisterModal}
        onHide={() => setShowRegisterModal(false)}
      >
        <Modal.Body className="p-0">
          <div className="modal-content">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h2 className="fw-bold mb-0">Sign Up</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={submitRegisterForm}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="floatingName"
                    placeholder="name"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                  />
                  <label htmlFor="floatingConfirmPassword">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-3 mb-4 text-center">
                  <small className="text-muted">
                    By clicking Sign up, you agree to the terms of use.
                  </small>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-dark"
                  type="submit"
                >
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <span>Sign up</span>
                </button>
                <button
                  className="w-100 py-2 mb-2 btn rounded-3"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRegisterModal(false);
                  }}
                >
                  Existing user, Login
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
