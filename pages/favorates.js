import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import OrderJumboltron from "../component/OrderJumboltron";

const Favorates = (props) => {
    return (
        <>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main>
                <OrderJumboltron jumboltronTitle="Total Favorates" jumboltronSubtitle={"10"} />
                <div class="container px-0 px-lg-5">
                    <p>Favorates</p>
                </div>
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </>
    );
}

export default Favorates;