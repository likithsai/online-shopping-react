//  content.js

import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import AppData from '../../data/appdata.json';
import { addItemToCart } from '../../actions/cartActions';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Content = (props) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const cartItems = useSelector((state) => state.cartItems);
    const [ itemData, setItemData ] = useState(props.items);
    const [ selectedCategories, setSelectedCategories ] = useState('All');
    const [ toast, setToast ] = useState(false);
    
    const handleCategoriesClick = (value) => {
        if(value.toLowerCase() !== 'all') {
            setItemData(props.items.filter(item => item.catname === value.toLowerCase()));
        } else {
            setItemData(props.items);
        }

        setSelectedCategories(value);
    }

    const addToCart = (item) => {
        dispatch(addItemToCart(item));
        setToast(true);
    }

    return (
        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5">
                <div className="row mb-5">
                    <Toast className="fixed-bottom end-0 m-3" onClose={() => setToast(false)} show={toast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Info</strong>
                        </Toast.Header>
                        <Toast.Body>
                            <i class="bi bi-check-circle-fill me-2 text-success"></i>
                            <span>Product added to cart</span>
                        </Toast.Body>
                    </Toast>
                    <ul className="nav justify-content-center">
                    {
                        props.categories.map((item, index) => {
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
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
                {
                    itemData.map((item, index) => {
                        return (
                            <div className="col mb-5 px-2" key={index}>
                                <div className="card shadow-sm h-100">
                                    <a onClick={() => history('/products/' + item.itemid)} className="text-decoration-none">
                                        <img loading="lazy" className="card-img-top" src={item.itemimages[0].imageurl} alt={item.itemimages[0].imagealt} />
                                        <div className="card-body p-4">
                                            <span className="h5 fw-bolder text-dark text-decoration-none">{item.itemname}</span>
                                            <p className="item-shorttext mb-3 text-dark">{item.itemdescshort}</p>
                                            <div className="w-100">
                                                <span className="fw-bold me-2 card_txt_nip text-dark">{ AppData.currency[0].baseCurrencySymbol + item.itemnewprice }</span>
                                                <span className="text-muted text-decoration-line-through me-2">{ AppData.currency[0].baseCurrencySymbol + item.itemoldprice }</span>
                                                <span className="me-2 text-success">{Math.round((item.itemoldprice - item.itemnewprice)/item.itemnewprice * 100)}% off</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center d-flex align-items-center justify-content-between">
                                        {
                                            //  check if item exist in cart or not
                                            cartItems.items.some(val => val.itemid === item.itemid) ? (
                                                <button className="btn btn-outline-dark mt-auto w-100" disabled>
                                                    <span>Added to cart</span>
                                                </button>
                                            ) : (
                                                <button className="btn btn-outline-dark mt-auto w-100" onClick={(e) => addToCart(item)}>
                                                    <span>Add to cart</span>
                                                </button>
                                            )
                                        }
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