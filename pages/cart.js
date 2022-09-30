//  Cart page

import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CartJumboltron from "../component/CartJumboltron";
import LoginModal from '../component/LoginModal';
import { removeItemToCart, removeAllCartItems } from "../store/actions/cartActions.js";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import payment from '../utils/payment';

const CartPage = (props) => {
    const dispatch = useDispatch();
    const [itemData, setItemData] = useState([]);
    const [totalAmt, setTotalAmt] = useState(0);
    const [actualAmt, setActualAmt] = useState(0);
    const cartItems = useSelector((state) => state.cartItems);
    const loginSession = useSelector((state) => state.loginSession);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        setItemData(cartItems.items);
        setActualAmt(
            cartItems.items
                .map((bill) => bill.itemoldprice)
                .reduce((acc, amount) => amount + acc, 0)
        );
        setTotalAmt(
            cartItems.items
                .map((bill) => bill.itemnewprice)
                .reduce((acc, amount) => amount + acc, 0)
        );
    }, [cartItems.items]);

    const removeItems = (item) => {
        const temp = itemData.filter((el) => {
            return el.itemid != item.itemid;
        });
        setItemData(temp);
        dispatch(removeItemToCart(item));
    };

    return (
        <div className="products">
            <Head>
                <title>Cart Page</title>
                <meta name="description" content="cart page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main>
                <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} onSuccessCallback={(data) => setShowLoginModal(false)} />
                {itemData.length > 0 ? (
                    <>
                        <CartJumboltron amt={totalAmt} amtOld={actualAmt} baseCurrencySymbol={ process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL } />
                        <div className="container my-5">
                            <div className="row px-lg-5">
                                <div className="col-12">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="table-responsive">
                                                    <table className="table table-borderless table-centered mb-0 tbl-cart">
                                                        <thead>
                                                            <tr>
                                                                <th rowSpan="2" className="py-3 h3"><span>Items in your cart ({ itemData.length })</span></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            itemData.map((item, index) => {
                                                                    return (
                                                                        <tr className="border-bottom d-flex align-items-center justify-content-between w-100" key={ index }>
                                                                            <td className="py-4 d-flex align-items-center w-75">
                                                                            {/* <Image width="100%" height="100%" layout="responsive" objectFit="contain" className="rounded me-3 shadow-sm border" src={item.itemimages[0].imageurl } alt={ item.itemimages[0].imagealt } /> */}
                                                                                <img src={ item.itemimages[0].imageurl } alt={ item.itemimages[0].imagealt } className="rounded me-3 shadow-sm border" height="100" />
                                                                                <p className="m-0 d-inline-block align-middle font-16">
                                                                                    <Link href={ "/products/" + item.itemid }>
                                                                                        <a className="text-body fw-bold cur-pointer">
                                                                                            { item.itemname }
                                                                                        </a>
                                                                                    </Link>
                                                                                    <br />
                                                                                    <span className="my-0 mb-1 text-truncation">{ item.itemdescshort }</span>
                                                                                    <button className="btn btn-link px-0" onClick={(e) => removeItems(item) }>Remove</button>
                                                                                </p>
                                                                            </td>
                                                                            <td className="py-5 text-end">
                                                                                <p className="fw-bolder m-0 h4">{process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL + item.itemnewprice }</p>
                                                                                <div className="d-none d-lg-flex m-0 text-end justify-content-end">
                                                                                    <p className="text-muted text-decoration-line-through m-0 me-2">{ process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL + item.itemoldprice }</p>
                                                                                    <p className="text-success m-0">({Math.round(((item.itemoldprice - item.itemnewprice) / item.itemnewprice) * 100 )} % off )</p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                }
                                                            )
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 my-5">
                                        {
                                            loginSession.isLoggedIn ? (
                                                <button type="button" className="btn btn-success p-3 w-100" onClick={() => {
                                                    if (loginSession.isLoggedIn) {
                                                        payment.initiatePayment (
                                                            "Cart Items", 
                                                            loginSession.user[0].userName,
                                                            loginSession.user[0].userEmail,
                                                            "collection of cart items",
                                                            null, 
                                                            totalAmt,
                                                            function(response) {
                                                                alert(response.razorpay_payment_id);
                                                            }
                                                        ) 
                                                    } else {
                                                        setShowLoginModal(true);
                                                    }
                                                }}>
                                                    <i className="bi bi-wallet-fill me-2"></i>
                                                    <span>
                                                        { "Pay " + process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL + totalAmt }
                                                    </span>
                                                </button>
                                            ) : (
                                                <button type="button" className="btn btn-success p-3 w-100" onClick={() => setShowLoginModal(true)}>
                                                    <i className="bi bi-lock-fill me-2"></i>
                                                    <span>Login to continue</span>
                                                </button>
                                            )
                                            
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="container my-5">
                        <div className="row px-lg-5">
                            <div className="col-md-12 text-center my-5 h-100">
                                <div className="my-3">
                                    <span className="h1 bi bi-bug mb-5"></span>
                                    <h1 className="h1 fw-bolder">No Items</h1>
                                    <div className="error-details">Your cart is empty. Please add items to cart.</div>
                                </div>
                                <Link href="/">
                                    <button className="btn btn-dark btn-l mt-3">
                                        <span className="glyphicon glyphicon-home"></span>
                                        <span className="btn text-white">
                                            Go to homepage
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </div>
    );
};

export default CartPage;
