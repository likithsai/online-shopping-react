//  cart page

import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const CartPage = (props) => {
    return (
        <div className="homepage">
            <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
            <div className="container my-3">
                <p>Cart page example</p>
            </div>
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default CartPage;