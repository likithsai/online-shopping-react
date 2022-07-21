//  content.js

import React, { useState } from 'react';

const Content = (props) => {
    const [ filteredData, setFilteredData ] = useState('');

    return (
        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5">
                <div className="row mb-5">
                    <ul class="nav justify-content-center">
                    {
                        props.categories.map((item, index) => {
                            return (
                                <li class="nav-item" onClick={() => { alert("clieck"); }}>
                                    <div class="card shadow-sm rounded-0 me-2 my-1">
                                        <div class="card-body text-center py-2 px-4">
                                            <i class={ item.caticon + " me-2"}></i>
                                            <span class="card-text text-center fw-bold">{ item.catname }</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
                {
                    props.items.map((item, index) => {
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
                                            <a className="btn btn-outline-dark mt-auto" href="#">
                                                <span>Add to cart</span>
                                            </a>
                                            <a className="btn btn-outline-dark mt-auto" href="#">
                                                <span>Buy Now</span>
                                            </a>
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
    );
}

export default Content;