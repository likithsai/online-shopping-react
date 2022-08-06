//  cart page
import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import CartJumboltron from './component/CartJumboltron';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';
import payment from '../utils/Payment';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MD5 from "crypto-js/md5";
import { removeItemToCart, removeAllCartItems } from "../actions/cartActions.js";
import { useSelector, useDispatch } from "react-redux";

const CartPage = (props) => {
    const [ itemData, setItemData ] = useState([]);
    const [ paymentSuccessDialog, setPaymentSuccessDialog ] = useState(false);
    const [ transactionID, setTransactionID ] = useState(''); 
    const CARTDATA = "cartData";
    const history = useNavigate();
    const cartItems = useSelector((state) => state.cartItems);
    const loginSession = useSelector((state) => state.loginSession);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setItemData(cartItems.items);
    }, []);

    const removeItems = (item) => {
        const temp = itemData.filter((el) => {
            return el.itemid != item.itemid
        });
        setItemData(temp);
        dispatch(removeItemToCart(item));
        // localStorage.setItem('cartData', JSON.stringify(temp));
    }

    return (
        <div className="cartpage">
            <Modal show={paymentSuccessDialog} onHide={() => setPaymentSuccessDialog(false)}>
                <Modal.Body className="text-center p-0 py-5">
                    <div class="text-center">
                        <div class="pt-3">
                            <i class="display-1 bi bi-check-circle-fill text-success"></i>
                        </div>
                        <div class="my-3">
                            <h4>Great!</h4>	
                            <p class="mb-4 mx-5">Your order have been processed. You will recieve download link in your mail or in your inbox within 2hrs.</p>

                            <div class="card m-5">
                                <div class="card-header">
                                    <strong>Order ID</strong>
                                </div>
                                <div class="card-body">
                                    <p className="h4 text-muted">{ transactionID }</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button class="btn btn-success me-2" data-dismiss="modal" onClick={() => {
                                setPaymentSuccessDialog(false)
                                history('/')
                            }}><span class="me-2">Continue shopping</span> <i class="bi bi-arrow-right-circle-fill"></i></button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
            {
                (itemData.length > 0) ?
                    <>
                        <CartJumboltron amt={ itemData.map(bill => bill.itemnewprice).reduce((acc, amount) => amount + acc, 0) } amtOld={ itemData.map(bill => bill.itemoldprice).reduce((acc, amount) => amount + acc, 0) } />
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
                                                                <th rowspan="2" className="py-3 h3">
                                                                    <span>Items in your cart ({itemData.length})</span>
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                itemData.map((item, index) => {
                                                                    return (
                                                                        <tr className="border-bottom d-flex align-items-center justify-content-between w-100" key={index}>
                                                                            <td className="py-4 d-flex align-items-center w-75">
                                                                                <img src={ item.itemimages[0].imageurl } alt={ item.itemimages[0].imagealt } className="rounded me-3 shadow-sm border" height="100" />
                                                                                <p className="m-0 d-inline-block align-middle font-16">
                                                                                    <a className="text-body fw-bold" onClick={() => history("/products/" + item.itemid)}>{ item.itemname }</a>
                                                                                    <br />
                                                                                    <span className="my-0 mb-1 text-truncation">{ item.itemdescshort }</span>
                                                                                    <button className="btn btn-link px-0" onClick={(e) => removeItems(item) }>Remove</button>
                                                                                </p>
                                                                            </td>
                                                                            <td className="py-5 text-end">
                                                                                <p className="fw-bolder m-0 h4">{ AppData.currency[0].baseCurrencySymbol + item.itemnewprice }</p>
                                                                                <div className="d-none d-lg-flex m-0 text-end justify-content-end">
                                                                                    <p className="text-muted text-decoration-line-through m-0 me-2">{ AppData.currency[0].baseCurrencySymbol + item.itemoldprice }</p>
                                                                                    <p className="text-success m-0">({Math.round((item.itemoldprice - item.itemnewprice)/item.itemnewprice * 100)}% off)</p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div> 
                                                </div>
                                            </div>
                                        <div className="col-md-12 my-5">
                                            <button 
                                                type="button" 
                                                className="btn btn-success p-3 w-100" 
                                                onClick={() => {
                                                    console.log(loginSession);
                                                    if(loginSession.isLoggedIn) {
                                                        payment.initiatePayment (
                                                            AppData.appname, 
                                                            "Amount to be paid", 
                                                            null,
                                                            itemData.map(bill => bill.itemnewprice).reduce((acc, amount) => amount + acc, 0),
                                                            function(response) {
                                                                if(response.razorpay_payment_id.length > 0) {
                                                                    setPaymentSuccessDialog(true);
                                                                    setTransactionID(response.razorpay_payment_id);
                                                                    setItemData([]);
                                                                    dispatch(removeAllCartItems());
                                                                    // localStorage.setItem('cartData', JSON.stringify([]));
                                                                }
                                                            }
                                                        ) 
                                                    } else {
                                                        history('/login');
                                                    }
                                                }}>
                                                    <i class="bi bi-credit-card-fill me-2"></i>
                                                    <span>Proceed to  Checkout</span>
                                                </button>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                :
                    <>
                        <div className="container my-5">
                            <div className="row px-lg-5">
                                <div className="col-md-12 text-center my-5 h-100">
                                    <div className="my-3">
                                        <span className="h1 bi bi-bug mb-5"></span>
                                        <h1 className="h1 fw-bolder">No Items</h1>
                                        <div className="error-details">Your cart is empty. Please add items to cart.</div>
                                    </div>
                                    <button onClick={() => history("/")} className="btn btn-dark btn-l mt-3">
                                        <span className="glyphicon glyphicon-home"></span>
                                        <span className="btn text-white">Go to homepage</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
            }
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default CartPage;