//  cart Jumboltron

import React from 'react';
import AppData from '../../data/appdata.json';

const CartJumboltron = (props) => {
    return (
        <section className="bg-dark py-1 shadow-sm">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <p className="lead fw-normal text-white-50 mb-0">Total bill payable</p>
                    <h1 className="display-4 fw-bolder">{ AppData.currencySymbol + props.amt }</h1>
                </div>
            </div>
        </section>
    )
}

export default CartJumboltron;