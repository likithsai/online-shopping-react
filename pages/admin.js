//  admin.js
//  admin page used to manage data

import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";

const admin = (props) => {
    return (
        <>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main className="container">
                <p>admin page</p>
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </>
    )
}

export default admin;