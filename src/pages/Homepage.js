//  homepage
import React from 'react';
import Header from './component/Header';
import Jumboltron from './component/Jumboltron';
import Content from './component/Content';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const HomePage = (props) => {
    return (
        <div className="homepage">
            <Header headerTitle={AppData.appname} />
            <Jumboltron title="Shop By Category" subTitle="Search with over 1000+ products listed" />
            <Content items={AppData.products} categories={AppData.categories} />
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default HomePage;