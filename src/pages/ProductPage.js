//  product page

import React from 'react';
import { useParams } from 'react-router-dom';  
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const ProductPage = (props) => {
    const params  = useParams();
    return (
        <div className="productpage">
            <Header headerTitle={AppData.appname} />
            <p>Params: { params.productname }</p>
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default ProductPage;