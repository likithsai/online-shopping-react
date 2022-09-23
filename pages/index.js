import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/Header";
import Jumboltron from "../component/Jumboltron";
import Content from "../component/Content";
import Footer from "../component/Footer";

export default function Home() {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
      const getProductData = async() => {
          const user = await fetch("/api/products")
            .then(response => response.json())
            .then(res => res.message[0]);
          setProducts(user.products);
          setCategories(user.categories);
      }

      getProductData();
  }, []);

  return (
    <div>
      <Head>
        <title>Shopping App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
      <Jumboltron title="Shop By Category" subTitle={"Shop with over 10 products listed."} />
      <Content products={products} categories={categories} />
      <Footer copyrightText="© 2022 Company, Inc" />
    </div>
  );
}
