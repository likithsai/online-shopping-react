//  header.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';

const Header = (props) => {
  const history = useRouter();
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const [ cartCount, setCartCount ] = useState(cartItems.items.length);

  useEffect(() => {
      setCartCount(cartItems.items.length);
  }, [cartItems]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-sticky fixed-top w-100 z-index border-bottom">
        <div className="container px-4 px-lg-5 d-flex align-items-center justify-content-between">
          <Link href="/" className="text-decoration-none">
            <div className="navbar-brand fw-bold">
              <i className="bi bi-box-seam-fill me-3"></i>
              <span>{props.headerTitle}</span>
            </div>
          </Link>
          <div className="d-flex align-items-center">
            <button className="btn m-0 p-1">
              <i className="bi bi-person-circle fs-5"></i>
            </button>
            <Link href={props.cartURL}>
              <button className="btn m-0 p-1">
                <span className="badge bg-dark text-white ms-1 px-2 rounded-pill py-2 px-3 d-flex align-items-center">
                  <i className="bi bi-cart-fill me-2 fs-6"></i>
                  <span>{ cartCount }</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
