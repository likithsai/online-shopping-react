//  product page

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';
import Carousel from 'react-bootstrap/Carousel';

const ProductPage = (props) => {
    const [ DATA, setDATA ] = useState(AppData);
    const params  = useParams();
    
    return (
        <div className="productpage">
            <Header headerTitle={AppData.appname} />
            {
                DATA.products.filter(item => item.itemid === params.productname).map((item, index) => {
                    return (
                        <div key={index}>
                            <section className="pt-sm-5">
                                <div className="container px-4 px-lg-5 my-5">
                                    <div className="row gx-4 gx-lg-5 align-items-center">
                                        <div className="col-md-6 my-5">
                                            <Carousel className="carousel-dark shadow-md">
                                            {
                                                item.itemimages.map((img, ind) => {
                                                    return(
                                                        <Carousel.Item key={ind}>
                                                            <img
                                                                loading="lazy"
                                                                className="card-img-top mb-5 mb-md-0"
                                                                src={img.imageurl}
                                                                alt={img.imagealt} />
                                                        </Carousel.Item>
                                                    )
                                                })
                                            }
                                            </Carousel>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="display-5 fw-bolder">{item.itemname}</h1>
                                            <div className="w-100 fs-5 mb-5 mt-2">
                                                <span className="fw-bold me-2 h2">${item.itemnewprice}</span>
                                                <span className="text-muted text-decoration-line-through me-2">${item.itemoldprice}</span>
                                                <span className="me-2 text-success">{Math.round((item.itemoldprice - item.itemnewprice)/item.itemnewprice * 100)}% off</span>
                                            </div>
                                            <p className="lead">{item.itemdescshort}</p>
                                            <div className="d-flex">
                                                <button className="btn btn-outline-dark flex-shrink-0 me-2" type="button">
                                                    <i className="bi-cart-fill me-1"></i>
                                                    <span>Add to cart</span>
                                                </button>
                                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                                    <i className="bi-bag-fill me-1"></i>
                                                    <span>Buy now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="pt-3 pb-5">
                                <div className="container px-4 px-lg-5 my-5" dangerouslySetInnerHTML={{ __html: item.itemdesclong }}></div>
                            </section>
                            <section className="py-5 bg-light">
                                <div className="container px-4 px-lg-5 mt-5">
                                    <h2 className="fw-bolder mb-4">Related products</h2>
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-2">
                                    {
                                        DATA.products.filter(item => item.category === DATA.products.filter(d => d.itemid === params.productname)[0].category).map((item, index) => {
                                            return (
                                                <div className="col mb-5 px-2" key={index}>
                                                    <a className="card shadow-sm h-100 text-decoration-none" href={ '/products/' + item.itemid}>
                                                        <img loading="lazy" className="card-img-top" src={item.itemimages[0].imageurl} alt={item.itemimages[0].imagealt} />
                                                        <div className="card-body p-4">
                                                            <span className="h5 fw-bolder text-dark text-decoration-none">{item.itemname}</span>
                                                            <p className="item-shorttext mb-3 text-dark">{item.itemdescshort}</p>
                                                            <div className="w-100">
                                                                <span className="fw-bold me-2 card_txt_nip text-dark">${item.itemnewprice}</span>
                                                                <span className="text-muted text-decoration-line-through me-2">${item.itemoldprice}</span>
                                                                <span className="me-2 text-success">{Math.round((item.itemoldprice - item.itemnewprice)/item.itemnewprice * 100)}% off</span>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                            <div className="text-center d-flex align-items-center justify-content-between">
                                                                <button className="btn btn-outline-dark mt-auto" href="#">
                                                                    <span>Add to cart</span>
                                                                </button>
                                                                <button className="btn btn-outline-dark mt-auto" href="#">
                                                                    <span>Buy Now</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                })
            }
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default ProductPage;