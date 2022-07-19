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
                            <section className="pt-5">
                                <div className="container px-4 px-lg-5 my-5">
                                    <div className="row gx-4 gx-lg-5 align-items-center">
                                        <div className="col-md-6">
                                            <Carousel className="carousel-dark shadow-md">
                                            {
                                                item.itemimages.map((img, ind) => {
                                                    return(
                                                        <Carousel.Item>
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
                                    <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center g-2">
                                        <div className="col mb-5 px-2"><div className="card shadow-sm h-100"><img loading="lazy" className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div className="card-body p-4"><a className="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p className="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div className="w-100"><span className="fw-bold me-2 card_txt_nip">$18</span><span className="text-muted text-decoration-line-through me-2">$20</span><span className="me-2 text-success">11% off</span></div></div><div className="card-footer p-4 pt-0 border-top-0 bg-transparent"><div className="text-center d-flex align-items-center justify-content-between"><a className="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a className="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
                                        <div className="col mb-5 px-2"><div className="card shadow-sm h-100"><img loading="lazy" className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div className="card-body p-4"><a className="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p className="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div className="w-100"><span className="fw-bold me-2 card_txt_nip">$18</span><span className="text-muted text-decoration-line-through me-2">$20</span><span className="me-2 text-success">11% off</span></div></div><div className="card-footer p-4 pt-0 border-top-0 bg-transparent"><div className="text-center d-flex align-items-center justify-content-between"><a className="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a className="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
                                        <div className="col mb-5 px-2"><div className="card shadow-sm h-100"><img loading="lazy" className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div className="card-body p-4"><a className="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p className="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div className="w-100"><span className="fw-bold me-2 card_txt_nip">$18</span><span className="text-muted text-decoration-line-through me-2">$20</span><span className="me-2 text-success">11% off</span></div></div><div className="card-footer p-4 pt-0 border-top-0 bg-transparent"><div className="text-center d-flex align-items-center justify-content-between"><a className="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a className="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
                                        <div className="col mb-5 px-2"><div className="card shadow-sm h-100"><img loading="lazy" className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div className="card-body p-4"><a className="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p className="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div className="w-100"><span className="fw-bold me-2 card_txt_nip">$18</span><span className="text-muted text-decoration-line-through me-2">$20</span><span className="me-2 text-success">11% off</span></div></div><div className="card-footer p-4 pt-0 border-top-0 bg-transparent"><div className="text-center d-flex align-items-center justify-content-between"><a className="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a className="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
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