//  Jumboltron
import React from 'react';

const Jumboltron = (props) => {
    return (
        <section class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">{props.title}</h1>
                    <p class="lead fw-normal text-white-50 mb-0">{props.subTitle}</p>
                </div>
            </div>
        </section>
    );
}

export default Jumboltron;