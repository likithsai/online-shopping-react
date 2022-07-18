//  Errorpage.js

import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const ErrorPage = (props) => {
    return (
        <div className="errorpage">
            <Header headerTitle={AppData.appname} />
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p class="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <a href="index.html" class="btn btn-primary">Go Home</a>
                </div>
            </div>
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default ErrorPage;