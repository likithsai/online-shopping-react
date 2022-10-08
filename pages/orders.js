import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import CartJumboltron from "../component/CartJumboltron";

const Orders = (props) => {
    return (
        <>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main>
                <CartJumboltron jumboltronTitle="Total Items Ordered" jumboltronSubtitle={"10"} />
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </>
    );
}

export default Orders;