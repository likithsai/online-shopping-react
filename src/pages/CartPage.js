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

const CartPage = (props) => {
    const [ itemData, setItemData ] = useState([]);
    const [ paymentSuccessDialog, setPaymentSuccessDialog ] = useState(false);
    const [ transactionID, setTransactionID ] = useState(''); 
    const CARTDATA = "cartData";
    const history = useNavigate();

    useEffect(() => {
        setItemData(JSON.parse(localStorage.getItem(CARTDATA)) || []);
    }, []);

    const removeItems = (item) => {
        const temp = itemData.filter((el) => {
            return el.itemid != item.itemid
        });
        setItemData(temp);
        localStorage.setItem('cartData', JSON.stringify(temp));
    }

    return (
        <div className="cartpage">
            <Modal show={paymentSuccessDialog} onHide={() => setPaymentSuccessDialog(false)}>
                <Modal.Header className="bg-success text-white" closeButton>
                    <Modal.Title>Payment successfull</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center p-0">
                    <section className="py-5 shadow-sm">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="text-center">
                                <p className="lead fw-normal mb-0">Your order is confirmed. You will recieve an order confirmation email/SMS shortly with download link for your items.</p>
                            </div>
                        </div>
                    </section>
                </Modal.Body>
                <Modal.Footer className="text-center d-flex justify-content-center">
                    <Button variant="secondary" onClick={() => {
                        setPaymentSuccessDialog(false);
                    }}>Continue Shopping</Button>
                </Modal.Footer>
            </Modal>
            <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
            {
                (itemData.length > 0) ?
                    <>
                        <CartJumboltron amt={ itemData.map(bill => bill.itemnewprice).reduce((acc, amount) => amount + acc, 0) } />
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
                                                                        <tr className="border-bottom" key={index}>
                                                                            <td className="py-4 d-flex align-items-center">
                                                                                <img src={ item.itemimages[0].imageurl } alt={ item.itemimages[0].imagealt } className="rounded me-3 shadow-sm border" height="100" />
                                                                                <p className="m-0 d-inline-block align-middle font-16">
                                                                                    <a className="text-body fw-bold" href={ "/products/" + item.itemid }>{ item.itemname }</a>
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
                                                                localStorage.setItem('cartData', JSON.stringify([]));
                                                            }
                                                        }
                                                    ) 
                                                }}>Proceed to  Checkout</button>  
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
                                    <button href="/" className="btn btn-dark btn-l mt-3">
                                        <span className="glyphicon glyphicon-home"></span>
                                        <button className="btn text-white" onClick={() => { history('/') }}>Go to homepage</button>
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