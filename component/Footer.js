//  Footer.js
import React from "react";

const Footer = (props) => {
  return (
    <footer className="py-3 bg-light">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item mx-1">
            <a href="#" className="nav-link px-2 text-muted">
              <span>About</span>
            </a>
          </li>
          <li className="nav-item mx-1">
            <a href="#" className="nav-link px-2 text-muted">
              <span>Track your product</span>
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">{props.copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
