import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';

const TrackProductPage = (props) => {
    return (
        <>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main className="container">
                <p>Track Product</p>
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </>
    );
};

export default TrackProductPage;
