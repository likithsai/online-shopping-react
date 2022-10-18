import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import OrderJumboltron from "../component/OrderJumboltron";
import { useSelector, useDispatch } from 'react-redux';
import LoginModal from '../component/LoginModal';

const Orders = (props) => {

    const loginSession = useSelector((state) => state.loginSession);

    useEffect(() => {
    });

    if(loginSession.isLoggedIn) {
        return (
            <>
                <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
                <main>
                     <OrderJumboltron jumboltronTitle="Total Items Ordered" jumboltronSubtitle={"10"} />
                </main>
                <Footer copyrightText="© 2022 Company, Inc" />
            </>
        );
    } else {
        return (
            <>
            <p>not logged in</p>
            </>
        );
    }
}

export default Orders;