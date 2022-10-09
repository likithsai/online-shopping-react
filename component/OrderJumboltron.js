//  cart Jumboltron

import React from 'react';

const OrderJumboltron = (props) => {
    return (
        <section className="bg-dark py-1 shadow-sm jumboltron">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <p className="lead fw-normal text-white-50 mb-0">{ props.jumboltronTitle }</p>
                    <h1 className="display-4 fw-bolder mb-0">{ props.jumboltronSubtitle }</h1>
                </div>
            </div>
        </section>
    )
}

export default OrderJumboltron;