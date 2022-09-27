import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Orders = (props) => {
    return (
        <>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main className="container">
                <p>Orders</p>
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </>
    );
}

export default Orders;