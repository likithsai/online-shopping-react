//  cart page
import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const CartPage = (props) => {
    const [ itemData, setItemData ] = useState([]);

    useEffect(() => {
        setItemData(JSON.parse(localStorage.getItem('cartData')));
    }, []);

    const removeItems = (item) => {
        const temp = itemData.filter((el) => {
            return el.itemid != item.itemid
        });
        setItemData(temp);
        localStorage.setItem('cartData', JSON.stringify(temp));
    }

    return (
        <div className="homepage">
            <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
            <div className="container my-5">
                <div className="row px-lg-5">
                    <div className="col-12">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-centered mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="py-3 h3">Items in your cart</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    itemData.map((item, index) => {
                                                        return (
                                                            <tr className="border-bottom" key={index}>
                                                                <td className="py-4 d-flex align-items-center">
                                                                    <img src={ item.itemimages[0].imageurl } alt={ item.itemimages[0].imagealt } className="rounded me-3 shadow-sm border" height="100" />
                                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                                        <a className="text-body fw-bold" href={ "/products/" + item.itemid }>{ item.itemname }</a>
                                                                        <br />
                                                                        <p className="my-0 mb-1">{ item.itemdescshort }</p>
                                                                        <button className="btn btn-link px-0" onClick={(e) => removeItems(item) }>Remove</button>
                                                                    </p>
                                                                </td>
                                                                <td className="py-5">
                                                                    <p className="fw-bold">${ item.itemnewprice }</p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                </tbody>
                                                <tfoot className="table-light">
                                                    <tr className="border-bottom">
                                                        <td className="py-2 text-end">
                                                            <p className="fw-bold">total: </p>
                                                        </td>
                                                        <td className="py-2">
                                                            <p className="fw-bold">${ itemData.map(bill => bill.itemnewprice).reduce((acc, amount) => amount + acc, 0) }</p>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div> 
                                    </div>
                                </div>
                            <div className="col-md-12 my-5">
                                <button type="button" className="btn btn-success p-3 w-100">Proceed to  Checkout</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default CartPage;