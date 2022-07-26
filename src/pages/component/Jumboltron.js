//  Jumboltron
import React from 'react';

const Jumboltron = (props) => {
    return (
        <section className="bg-dark py-5 jumboltron">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">{props.title}</h1>
                    <p className="lead fw-normal text-white-50 mb-0">{props.subTitle}</p>
                </div>
            </div>
        </section>
    );
}

export default Jumboltron;