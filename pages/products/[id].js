//  productsjs
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import LoginModal from '../../component/LoginModal';
import Utils from '../../utils/utility';
import { addItemToCart } from '../../store/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import payment from '../../utils/payment';

export default function Products() {
    const {
        query: { id }
    } = useRouter();

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartItems);
    const loginSession = useSelector((state) => state.loginSession);
    const [itemId, setItemId] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemDescShort, setItemDescShort] = useState('');
    const [itemDescLong, setItemDescLong] = useState('');
    const [itemCategory, setItemCategory] = useState('');
    const [itemImages, setItemImages] = useState([]);
    const [itemNewPrice, setItemNewPrice] = useState(0);
    const [itemOldPrice, setItemOldPrice] = useState(0);
    const [itemCurrency, setItemCurrency] = useState([]);
    const [relatedItems, setRelatedItems] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        Utils.fetchData('/api/getproducts', { productid: id }, (data) => {
            if (Object.keys(data.message.relateditems).length !== 0) {
                setRelatedItems(data.message.relateditems);
            }

            if (Object.keys(data.message.filteredProducts).length !== 0) {
                setItemId(data.message.filteredProducts[0].itemid);
                setItemName(data.message.filteredProducts[0].itemname);
                setItemDescShort(
                    data.message.filteredProducts[0].itemdescshort
                );
                setItemDescLong(data.message.filteredProducts[0].itemdesclong);
                setItemCategory(data.message.filteredProducts[0].catname);
                setItemImages(data.message.filteredProducts[0].itemimages);
                setItemOldPrice(data.message.filteredProducts[0].itemoldprice);
                setItemNewPrice(data.message.filteredProducts[0].itemnewprice);
                setItemCurrency(data.message.filteredProducts[0].currency);
            }
        });

        window.scrollTo(0, 0);
    }, [id]);

    const addToCart = (itm) => {
        dispatch(addItemToCart(itm));
    };

    if (itemId.length > 0) {
        return (
            <div className="products">
                <Head>
                    <title>{itemName}</title>
                    <meta name="description" content={itemDescShort} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header
                    headerTitle="Shopping App"
                    logoURL="/"
                    cartURL="/cart"
                />
                <main>
                    <LoginModal
                        show={showLoginModal}
                        onHide={() => setShowLoginModal(false)}
                        onSuccessCallback={(data) => setShowLoginModal(false)}
                    />
                    <section className="pt-sm-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="row gx-4 gx-lg-5 align-items-center">
                                <div className="col-md-6 my-5">
                                    <Carousel className="carousel-dark shadow-md">
                                        {itemImages.map((img, ind) => {
                                            return (
                                                <Carousel.Item key={ind}>
                                                    <Image
                                                        className="card-img-top mb-5 mb-md-0"
                                                        src={img.imageurl}
                                                        alt={img.imagealt}
                                                        width="100%"
                                                        height="100%"
                                                        layout="responsive"
                                                        objectFit="contain"
                                                    />
                                                </Carousel.Item>
                                            );
                                        })}
                                    </Carousel>
                                </div>
                                <div className="col-md-6">
                                    <h1 className="display-5 fw-bolder">
                                        {itemName}
                                    </h1>
                                    <div className="w-100 fs-5 mb-5 mt-2">
                                        <span className="fw-bold me-2 h2">
                                            { process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL +
                                                itemNewPrice }
                                        </span>
                                        <span className="text-muted text-decoration-line-through me-2">
                                            { process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL +
                                                itemOldPrice}
                                        </span>
                                        <span className="me-2 text-success">
                                            {Math.round(
                                                ((itemOldPrice - itemNewPrice) /
                                                    itemNewPrice) *
                                                    100
                                            )}
                                            % off
                                        </span>
                                    </div>
                                    <p className="lead">{itemDescShort}</p>
                                    <div className="d-flex">
                                        {cartItems.items.some(
                                            (val) => val.itemid === itemId
                                        ) ? (
                                            <button
                                                className="btn btn-outline-dark flex-shrink-0 me-2"
                                                type="button"
                                                disabled
                                            >
                                                <i className="bi-cart-fill me-1"></i>
                                                <span>Added to cart</span>
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-outline-dark flex-shrink-0 me-2"
                                                type="button"
                                                onClick={() =>
                                                    addToCart({
                                                        itemid: itemId,
                                                        itemname: itemName,
                                                        itemdescshort:
                                                            itemDescShort,
                                                        itemdesclong:
                                                            itemDescLong,
                                                        itemimages: itemImages,
                                                        catname: itemCategory,
                                                        itemnewprice:
                                                            itemNewPrice,
                                                        itemoldprice:
                                                            itemOldPrice
                                                    })
                                                }
                                            >
                                                <i className="bi-cart-fill me-1"></i>
                                                <span>Add to cart</span>
                                            </button>
                                        )}
                                        <button
                                            className="btn btn-outline-dark flex-shrink-0"
                                            type="button"
                                            onClick={() => {
                                                if (loginSession.isLoggedIn) {
                                                    payment.initiatePayment (
                                                        itemName, 
                                                        loginSession.user[0].userName,
                                                        loginSession.user[0].userEmail,
                                                        itemDescShort,
                                                        itemImages[0].imageurl, 
                                                        itemNewPrice,
                                                        function(response) {
                                                            alert(response.razorpay_payment_id);
                                                        }
                                                    ) 
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }}
                                        >
                                            <i className="bi-bag-fill me-1"></i>
                                            <span>Buy now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pt-3 pb-5">
                        <div
                            className="container px-4 px-lg-5 my-5"
                            dangerouslySetInnerHTML={{ __html: itemDescLong }}
                        ></div>
                    </section>
                    <section className="py-5 bg-light">
                        <div className="container px-4 px-lg-5 mt-5">
                            <h2 className="fw-bolder mb-4">Related products</h2>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-2">
                                {relatedItems.map((item, index) => {
                                    return (
                                        <div
                                            className="col mb-5 px-2"
                                            key={index}
                                        >
                                            <div className="card shadow-sm h-100 text-decoration-none">
                                                <Link
                                                    href={
                                                        '/products/' +
                                                        item.itemid
                                                    }
                                                    className="text-decoration-none"
                                                >
                                                    <div>
                                                        <Image
                                                            className="card-img-top"
                                                            src={ item.itemimages[0].imageurl }
                                                            alt={ item.itemimages[0].imagealt }
                                                            width="100%"
                                                            height="100%"
                                                            layout="responsive"
                                                            objectFit="contain"
                                                        />
                                                        {/* <img loading="lazy" className="card-img-top" src={item.itemimages[0].imageurl} alt={item.itemimages[0].imagealt} /> */}
                                                        <div className="card-body p-4">
                                                            <span className="h5 fw-bolder text-dark text-decoration-none">
                                                                {item.itemname}
                                                            </span>
                                                            <p className="item-shorttext mb-3 text-dark">
                                                                {
                                                                    item.itemdescshort
                                                                }
                                                            </p>
                                                            <div className="w-100">
                                                                <span className="fw-bold me-2 card_txt_nip text-dark">
                                                                    { process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL +
                                                                        item.itemnewprice}
                                                                </span>
                                                                <span className="text-muted text-decoration-line-through me-2">
                                                                    { process.env.NEXT_PUBLIC_DEFAULTCURRENCYSYMBOL +
                                                                        item.itemoldprice}
                                                                </span>
                                                                <span className="me-2 text-success">
                                                                    {Math.round(
                                                                        ((item.itemoldprice -
                                                                            item.itemnewprice) /
                                                                            item.itemnewprice) *
                                                                            100
                                                                    )}
                                                                    % off
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center d-flex align-items-center justify-content-between">
                                                        <button
                                                            className="btn btn-outline-dark mt-auto w-100"
                                                            onClick={() =>
                                                                addToCart(item)
                                                            }
                                                        >
                                                            <span>
                                                                Add to cart
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer copyrightText="© 2022 Company, Inc" />
            </div>
        );
    } else {
        return (
            <div className="products">
                <Head>
                    <title>Shopping App</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header
                    headerTitle="Shopping App"
                    logoURL="/"
                    cartURL="/cart"
                />
                <main className="container">
                    <p>data doesnt exist</p>
                </main>
                <Footer />
            </div>
        );
    }
}
