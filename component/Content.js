//  content.js
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Content = (props) => {
    const [ itemData, setItemData ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const LIMITAMOUNT = 8;
    const [ maxLimit, setMaxLimit ] = useState(LIMITAMOUNT);

    useEffect(() => {
        setItemData(props.products);
        setCategories(props.categories);
        console.log(itemData.length);
    }, [props.products, props.categories]);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (Math.round(window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
                setMaxLimit(maxLimit + LIMITAMOUNT);
                // this.alert('called');
            }
        });
    }, [maxLimit]);

    return (
        <main className="pt-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
                {
                    (itemData.length > 0) ? (
                        itemData.slice(0, maxLimit).map((item, index, length) => {
                            return (
                                <div className="col mb-5 px-2" key={index}>
                                    <div className="card shadow-sm h-100">
                                        <a className="text-decoration-none">
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
                                                <button className="btn btn-outline-dark mt-auto w-100" onClick={(e) =>alert('clicked')}>
                                                    <span>Add to cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (<p>No Items</p>)
                }
                </div>
            </div>
        </main>
    );
}

export default Content;