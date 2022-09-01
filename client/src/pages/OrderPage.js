//  OrderPage.js

import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const OrderPage = (props) => {
    const loginSession = useSelector((state) => state.loginSession);
    const history = useNavigate();

    if(!loginSession.isLoggedIn) {
        history('/');   
    } else {
        return (
            <div className="orderPage">
                <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
                <div className="container my-4">
                    <p>Order Page</p>
                </div>
                <Footer content={AppData.footertext} />
            </div>
        );
    }
}

export default OrderPage;