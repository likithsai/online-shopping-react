//  content.js

import React from 'react';

const Content = (props) => {
    return (
        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    props.items.map((item, index) => {
                        return (
                            <div className="col mb-5 px-2" key={index}>
                                <div className="card shadow-sm h-100">
                                    <img className="card-img-top" src={item.itemcardimg} alt="..." />
                                    <div className="card-body p-4">
                                        <a className="h5 fw-bolder text-dark" href={ '/products/' + item.itemid}>{item.itemname}</a>
                                        <p className="item-shorttext mb-3">{item.itemdescshort}</p>
                                        <div className="w-100">
                                            <span className="fw-bold me-2 card_txt_nip">${item.itemnewprice}</span>
                                            <span className="text-muted text-decoration-line-through me-2">${item.itemoldprice}</span>
                                            <span className="me-2 text-success">{Math.round((item.itemoldprice - item.itemnewprice)/item.itemnewprice * 100)}% off</span>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center d-flex align-items-center justify-content-between">
                                            <a className="btn btn-outline-dark mt-auto" href="#">
                                                <span>Add to cart</span>
                                            </a>
                                            <a className="btn btn-outline-dark mt-auto" href="#">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    );
}

export default Content;