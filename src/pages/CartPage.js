//  cart page

import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const CartPage = (props) => {
    // var itemInCart = JSON.parse(localStorage.getItem('cartData')) || [];
    const [ itemData, setItemData ] = useState([]);

    useEffect(() => {
        setItemData(JSON.parse(localStorage.getItem('cartData')));
    }, []);

    return (
        <div className="homepage">
            <Header headerTitle={AppData.appname} logoURL="/" cartURL="/cart" />
            <div className="container my-5">
            <div class="row px-5">
                            <div class="col-12">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="table-responsive">
                                                    <table class="table table-borderless table-centered mb-0">
                                                        <thead class="table-light">
                                                            <tr>
                                                                <th class="py-3">Product</th>
                                                                <th class="py-3">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            itemData.map((item, index) => {
                                                                return (
                                                                    <tr class="border-bottom">
                                                                        <td class="py-4">
                                                                            <img src={ item.itemimages[0].imageurl } alt={ item.itemimages[0].imagealt } title="contact-img" class="rounded me-3" height="64" />
                                                                            <p class="m-0 d-inline-block align-middle font-16">
                                                                                <a href="apps-ecommerce-products-details.html" class="text-body fw-bold">{ item.itemname }</a>
                                                                                <br />
                                                                                <p class="my-0 mb-1">{ item.itemdescshort }</p>
                                                                                <a href="#">Remove</a>
                                                                            </p>
                                                                        </td>
                                                                        <td class="py-3">
                                                                            <p class="fw-bold">${ item.itemnewprice }</p>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                            {/* <tr class="border-bottom">
                                                                <td class="py-4">
                                                                    <img src="assets/images/products/product-1.jpg" alt="contact-img" title="contact-img" class="rounded me-3" height="64" />
                                                                    <p class="m-0 d-inline-block align-middle font-16">
                                                                        <a href="apps-ecommerce-products-details.html" class="text-body fw-bold">Amazing Modern Chair</a>
                                                                        <br />
                                                                        <p class="me-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p>
                                                                    </p>
                                                                </td>
                                                                <td class="py-3">
                                                                    <p class="fw-bold">$148.66</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="border-bottom">
                                                                <td class="py-4">
                                                                    <img src="assets/images/products/product-1.jpg" alt="contact-img" title="contact-img" class="rounded me-3" height="64" />
                                                                    <p class="m-0 d-inline-block align-middle font-16">
                                                                        <a href="apps-ecommerce-products-details.html" class="text-body fw-bold">Amazing Modern Chair</a>
                                                                        <br />
                                                                        <p class="me-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p>
                                                                    </p>
                                                                </td>
                                                                <td class="py-3">
                                                                    <p class="fw-bold">$148.66</p>
                                                                </td>
                                                            </tr> */}
                                                        </tbody>
                                                        <tfoot class="table-light">
                                                            <tr class="border-bottom">
                                                                <td class="py-2 text-end">
                                                                    <p class="fw-bold">Subtotal: </p>
                                                                </td>
                                                                <td class="py-2">
                                                                    <p class="fw-bold">$148.66</p>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="col-md-12 my-5">
                                            <button type="button" class="btn btn-success p-3 w-100">Proceed to  Checkout</button>  
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