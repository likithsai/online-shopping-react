//  header.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = (props) => {
  const history = useRouter();

  return (
    <nav className="header">
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row p-0">
            <ul className="list-group list-group-flush w-100 p-0">
              <li className="list-group-item bg-light d-flex align-items-center justify-content-between px-4">
                <div>
                  <i className="bi bi-list me-3"></i>
                  <span>Orders</span>
                </div>
                <span className="badge bg-dark text-white ms-1 px-2 rounded-pill">
                  <span>0</span>
                </span>
              </li>
              <li
                className="list-group-item bg-light px-4"
                onClick={() => {
                  window.location.reload();
                }}
              >
                <i className="bi bi-box-arrow-right me-3"></i>
                <span className="text-danger fw-bold">Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-sticky fixed-top w-100 z-index">
        <div className="container px-4 px-lg-5 d-flex align-items-center justify-content-between">
          <a className="navbar-brand fw-bold">
            <i className="bi-cart-fill me-2"></i>
            <span>{props.headerTitle}</span>
          </a>
          <div className="d-flex align-items-center">
            <button className="btn m-0 p-1">
              <i className="bi bi-search"></i>
            </button>
            <button className="btn">
              <span className="badge bg-dark text-white ms-1 px-2 rounded-pill py-2 px-3">
                <i className="bi bi-cart me-2"></i>
                <span>10</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
