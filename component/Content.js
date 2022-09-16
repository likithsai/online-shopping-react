//  content.js
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Content = (props) => {
    const [ itemData, setItemData ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ selectedCategories, setSelectedCategories ] = useState('All');
    const LIMITAMOUNT = 8;
    const [ maxLimit, setMaxLimit ] = useState(LIMITAMOUNT);

    useEffect(() => {
        setItemData(props.products);
        setCategories(props.categories);
    }, [props.products, props.categories]);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (Math.round(window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
                setMaxLimit(maxLimit + LIMITAMOUNT);
            }
        });
    }, [maxLimit]);

    const handleCategoriesClick = (value) => {
        if(value.toLowerCase() !== 'all') {
            setItemData(props.products.filter(item => item.catname === value.toLowerCase()));
        } else {
            setItemData(props.products);
        }

        setMaxLimit(LIMITAMOUNT);
        setSelectedCategories(value);
    }

    const addToCart = (itm) => {
        alert("Item : " + JSON.stringify(itm));
    }

    return (
        <main className="pt-5">
            <div className="container px-4 px-lg-5">
                <div className="row">
                    <ul className="nav justify-content-center">
                    {
                        categories.map((item, index) => {
                            return (
                                <li className="nav-item" key={index} onClick={(e) => handleCategoriesClick(item.catname)}>
                                    <button className={ (item.catname.toLowerCase() === selectedCategories.toLowerCase()) ? 'text-dark card shadow-sm me-2 my-1 me-2 bg-warning' : 'text-dark card shadow-sm me-2 my-1 me-2'} value={item.catname}>
                                        <div className="card-body text-center py-2 px-4 d-flex align-items-center">
                                            <i className={ item.caticon + " me-2"}></i>
                                            <span className="card-text text-center fw-bold me-2">{ item.catname }</span>
                                        </div>
                                    </button>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <p className="my-2 text-muted text-center">{itemData.length} Items found</p>
                </div>
                <div className={ (itemData.length > 0) ? "row justify-content-center gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 mt-5" : "row justify-content-center" }>
                {
                    (itemData.length > 0) ? (
                        itemData.slice(0, maxLimit).map((item, index, length) => {
                            return (
                                <div className="col mb-5 px-2" key={index}>
                                    <div className="card shadow-sm h-100">
                                        <a className="text-decoration-none" href={ "/products/" + item.itemid }>
                                            <Image width="100%" height="100%" layout="responsive" objectFit="contain" className="card-img-top" src={item.itemimages[0].imageurl} alt={item.itemimages[0].imagealt} />
                                            <div className="card-body p-4">
                                                 <span className="h5 fw-bolder text-dark text-decoration-none">{item.itemname}</span>
                                                <p className="item-shorttext mb-3 text-dark">{item.itemdescshort}</p>
                                                <div className="w-100">
                                                    <span className="fw-bold me-2 card_txt_nip text-dark">{ item.currency[0].baseCurrencySymbol + item.itemnewprice }</span>
                                                    <span className="text-muted text-decoration-line-through me-2">{ item.currency[0].baseCurrencySymbol + item.itemoldprice }</span>
                                                    <span className="me-2 text-success">{Math.round((item.itemoldprice - item.itemnewprice)/item.itemnewprice * 100)}% off</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center d-flex align-items-center justify-content-between">
                                                <button className="btn btn-outline-dark mt-auto w-100" onClick={(e) => addToCart(item)}>
                                                    <span>Add to cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="row px-lg-5">
                            <div className="col-md-12 text-center my-5 h-100">
                                <div className="my-3">
                                    <h1 className="h1 fw-bolder">No Items</h1>
                                    <div className="error-details">There is no item present here.</div>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        </main>
    );
}

export default Content;