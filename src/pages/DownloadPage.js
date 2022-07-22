//  download page

import React from 'react';
import { useParams } from 'react-router-dom';  
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const DownloadPage = (props) => {
    const params  = useParams();

    return (
        <div className="donwloadpage">
            <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
            <p>Download Page</p>
            <p>params: {params.fileid}</p>
            <Footer content={AppData.footertext} />
        </div>
    )
}

export default DownloadPage;