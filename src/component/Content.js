//  content.js

import React from 'react';

const Content = (props) => {
    return (
        <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5 px-2">
                        <div class="card shadow-sm h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    <span class="fw-bold me-2">$18.00</span>
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center d-flex align-items-center justify-content-between">
                                    <a class="btn btn-outline-dark mt-auto" href="#">
                                        <span>Add to cart</span>
                                    </a>
                                    <a class="btn btn-outline-dark mt-auto" href="#">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;