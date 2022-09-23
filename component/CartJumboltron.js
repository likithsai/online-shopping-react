//  cart Jumboltron

import React from 'react';

const CartJumboltron = (props) => {
    return (
        <section className="bg-dark py-1 shadow-sm jumboltron">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <p className="lead fw-normal text-white-50 mb-0">Total bill payable</p>
                    <h1 className="display-4 fw-bolder mb-0">{ props.baseCurrencySymbol + props.amt }</h1>
                    <div className="d-flex align-items-center text-center justify-content-center">
                        <span className="lead fw-normal text-white-50 mb-0 text-decoration-line-through me-2">{ props.baseCurrencySymbol + props.amtOld }</span>
                        <span className="text-warning m-0">({ Math.round((props.amtOld - props.amt)/props.amt * 100) + "% off" })</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartJumboltron;