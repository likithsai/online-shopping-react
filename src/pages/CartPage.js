//  cart page
import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import CartJumboltron from './component/CartJumboltron';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';
import payment from '../utils/Payment';

const CartPage = (props) => {
    const [ itemData, setItemData ] = useState([]);
    const CARTDATA = "cartData";

    useEffect(() => {
        setItemData(JSON.parse(localStorage.getItem(CARTDATA)) || []);
    });

    const removeItems = (item) => {
        const temp = itemData.filter((el) => {
            return el.itemid != item.itemid
        });
        setItemData(temp);
        localStorage.setItem('cartData', JSON.stringify(temp));
    }

    return (
        (itemData.length > 0) ?
            <div className="cartpage">
                <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
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
                                                        <th className="py-3 h3">Items in your cart</th>
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
                                                                    <td className="py-5">
                                                                        <p className="fw-bolder">${ item.itemnewprice }</p>
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
                                                    alert(response.razorpay_payment_id);
                                                    setItemData([]);
                                                    localStorage.setItem('cartData', JSON.stringify([]));
                                                }
                                            ) 
                                        }}>Proceed to  Checkout</button>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer content={AppData.footertext} />
            </div>
        :
            <div className="cartpage">
                <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
                <div className="container my-5">
                    <div className="row px-lg-5">
                        <div className="col-md-12 text-center my-5 h-100">
                            <div className="my-3">
                                <h1 className="h1 fw-bolder">No Items</h1>
                                <div className="error-details">Your cart is empty. Please add items to cart.</div>
                            </div>
                            <button href="/" className="btn btn-dark btn-l mt-3">
                                <span className="glyphicon glyphicon-home"></span>
                                <span>Go to homepage</span>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer content={AppData.footertext} />
            </div>
    );
}

export default CartPage;