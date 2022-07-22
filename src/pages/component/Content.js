//  content.js

import React, { useState } from 'react';

const Content = (props) => {
    
    const [ itemData, setItemData ] = useState(props.items);
    const [ selectedCategories, setSelectedCategories ] = useState('All');

    const handleCategoriesClick = (value) => {
        if(value.toLowerCase() !== 'all') {
            setItemData(props.items.filter(item => item.catname === value.toLowerCase()));
        } else {
            setItemData(props.items);
        }

        setSelectedCategories(value);
    }

    return (
        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5">
                <div className="row mb-5">
                    <ul className="nav justify-content-center">
                    {
                        props.categories.map((item, index) => {
                            return (
                                <li className="nav-item" key={index} onClick={(e) => handleCategoriesClick(item.catname)}>
                                    <button className={ (item.catname.toLowerCase() === selectedCategories.toLowerCase()) ? 'card shadow-sm me-2 my-1 me-2 bg-warning' : 'card shadow-sm me-2 my-1 me-2'} value={item.catname}>
                                        <div className="card-body text-center py-2 px-4">
                                            <i className={ item.caticon + " me-2"}></i>
                                            <span className="card-text text-center fw-bold">{ item.catname }</span>
                                        </div>
                                    </button>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <p className="my-2 text-muted text-center">{itemData.length} Items</p>
                </div>
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
                {
                    itemData.map((item, index) => {
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
    );
}

export default Content;