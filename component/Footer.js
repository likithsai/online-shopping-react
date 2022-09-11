//  Footer.js
import React from "react";

const Footer = (props) => {
  return (
    <footer className="py-3 bg-light">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item mx-1">
            <a href="#" className="nav-link px-2 text-muted">
              <i className="bi bi-house me-2"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item mx-1">
            <a href="#" className="nav-link px-2 text-muted">
              <i className="bi bi-list me-2"></i>
              <span>Features</span>
            </a>
          </li>
          <li className="nav-item mx-1">
            <a href="#" className="nav-link px-2 text-muted">
              <i className="bi bi-cash me-2"></i>
              <span>Pricing</span>
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
