//  product page

import React from 'react';
import { useParams } from 'react-router-dom';  
import Header from './component/Header';
import Footer from './component/Footer';
import AppData from '../data/appdata.json';

const ProductPage = (props) => {
    const params  = useParams();
    return (
        <div className="productpage">
            <Header headerTitle={AppData.appname} />
            <p>Params: { params.productname }</p>
            <section class="pt-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6">
                            <div id="carouselExampleControls" class="carousel carousel-dark slide shadow-sm" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                                </div>
                                <div class="carousel-inner">
                                <div class="carousel-item">
                                    <img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
                                </div>
                                <div class="carousel-item active">
                                    <img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
                                </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h1 class="display-5 fw-bolder">Shop item template</h1>
                            <div class="w-100 fs-5 mb-5 mt-2">
                                <span class="fw-bold me-2 h2">$18</span>
                                <span class="text-muted text-decoration-line-through me-2">$20</span>
                                <span class="me-2 text-success">11% off</span>
                            </div>
                            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div class="d-flex">
                                <button class="btn btn-outline-dark flex-shrink-0 me-2" type="button">
                                    <i class="bi-cart-fill me-1"></i>
                                    <span>Add to cart</span>
                                </button>
                                <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i class="bi-bag-fill me-1"></i>
                                    <span>Buy now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-3 pb-5">
                <div class="container px-4 px-lg-5 my-5">
                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet dapibus urna at egestas. Aliquam iaculis quam id neque dictum, at eleifend turpis dignissim. Vestibulum nec mauris ac leo cursus ultrices. Nam hendrerit diam orci, nec venenatis velit faucibus at. Praesent mattis at dolor et volutpat. Etiam elementum turpis fringilla nisl eleifend, in ullamcorper elit mollis. Nam congue urna non vestibulum mattis. Phasellus in sapien ac tellus pretium pharetra. Suspendisse fringilla nisl arcu, vel mattis odio auctor ut. Phasellus lobortis est id sapien tempus, non hendrerit leo faucibus. Maecenas augue nisl, vehicula et est non, dignissim aliquam nisl. Proin in finibus ligula. Vestibulum vitae dolor vulputate, pellentesque purus eu, tincidunt lorem. Ut ornare turpis eleifend nisi porta, et ultricies enim feugiat. Nunc luctus purus vitae nisl sagittis, in elementum turpis efficitur.</p>
                    <p class="lead">Aliquam quis purus egestas, rutrum turpis ut, tristique lacus. Quisque id tellus vitae augue feugiat molestie. Ut ultrices elit vitae ipsum congue dictum. Aliquam ante nibh, lobortis eget metus volutpat, placerat placerat odio. Quisque elementum, lectus quis facilisis aliquam, enim lorem elementum leo, quis accumsan purus sem scelerisque justo. Fusce et rutrum nisl. Curabitur in nisi a neque consequat lacinia ac in massa.</p>
                    <p class="lead">Maecenas in elit sit amet enim laoreet tincidunt non vel neque. Aliquam ornare, lacus ut imperdiet fringilla, orci est consequat ligula, nec hendrerit turpis erat quis est. Donec lacinia vulputate pellentesque. Integer pellentesque sapien sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec maximus imperdiet risus, ac vestibulum nisi finibus vitae. Morbi non faucibus dui, sit amet volutpat turpis. Vestibulum in elit sed quam finibus ultrices. Praesent justo diam, consectetur non consequat eget, sodales vel libero. Mauris sagittis lorem nunc, sed cursus tortor bibendum laoreet. Maecenas justo dolor, scelerisque et arcu non, imperdiet tristique enim. In dictum dictum massa ac fermentum.</p>
                </div>
            </section>
            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5">
                    <h2 class="fw-bolder mb-4">Related products</h2>
                    <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center g-2">
                        <div class="col mb-5 px-2"><div class="card shadow-sm h-100"><img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div class="card-body p-4"><a class="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p class="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div class="w-100"><span class="fw-bold me-2 card_txt_nip">$18</span><span class="text-muted text-decoration-line-through me-2">$20</span><span class="me-2 text-success">11% off</span></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center d-flex align-items-center justify-content-between"><a class="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a class="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
                        <div class="col mb-5 px-2"><div class="card shadow-sm h-100"><img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div class="card-body p-4"><a class="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p class="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div class="w-100"><span class="fw-bold me-2 card_txt_nip">$18</span><span class="text-muted text-decoration-line-through me-2">$20</span><span class="me-2 text-success">11% off</span></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center d-flex align-items-center justify-content-between"><a class="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a class="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
                        <div class="col mb-5 px-2"><div class="card shadow-sm h-100"><img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div class="card-body p-4"><a class="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p class="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div class="w-100"><span class="fw-bold me-2 card_txt_nip">$18</span><span class="text-muted text-decoration-line-through me-2">$20</span><span class="me-2 text-success">11% off</span></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center d-flex align-items-center justify-content-between"><a class="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a class="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
                        <div class="col mb-5 px-2"><div class="card shadow-sm h-100"><img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /><div class="card-body p-4"><a class="h5 fw-bolder text-dark" href="/products/SKU1948756">fancy product</a><p class="item-shorttext mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.</p><div class="w-100"><span class="fw-bold me-2 card_txt_nip">$18</span><span class="text-muted text-decoration-line-through me-2">$20</span><span class="me-2 text-success">11% off</span></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center d-flex align-items-center justify-content-between"><a class="btn btn-outline-dark mt-auto" href="#"><span>Add to cart</span></a><a class="btn btn-outline-dark mt-auto" href="#"><span>Buy Now</span></a></div></div></div></div>
                    </div>
                </div>
            </section>
            <Footer content={AppData.footertext} />
        </div>
    );
}

export default ProductPage;