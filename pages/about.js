import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';

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
