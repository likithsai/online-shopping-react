import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const AboutPage = (props) => {
    return (
        <>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main className="container">
                <p>About</p>
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </>
    );
};

export default AboutPage;
