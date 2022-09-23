//  productsjs
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function Products() {
    const { query: { id } } = useRouter();
    const [ itemId, setItemId ] = useState('');
    const [ itemName, setItemName ] = useState('');
    const [ itemDescShort, setItemDescShort ] = useState('');
    const [ itemDescLong, setItemDescLong ] = useState('');
    const [ itemCategory, setItemCategory ] = useState('');
    const [ itemImages, setItemImages ] = useState([]);
    const [ itemNewPrice, setItemNewPrice ] = useState(0);
    const [ itemOldPrice, setItemOldPrice ] = useState(0);
    const [ currency, setCurrency ] = useState([]);

    const fetchData = async(url, params, callback) => {
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        };

        const response = await fetch(url, settings);
        const data = await response.json();
        
        callback(data);
    }

    useEffect(() => {
        fetchData('/api/getproducts', { 'productid': id }, (data) => {
            if (Object.keys(data.message).length !== 0){
                setItemId(data.message[0].itemid);
                setItemName(data.message[0].itemname);
                setItemDescShort(data.message[0].itemdescshort);
                setItemDescLong(data.message[0].itemdesclong);
                setItemCategory(data.message[0].catname);
                setItemImages(data.message[0].itemimages);
                setItemOldPrice(data.message[0].itemoldprice);
                setItemNewPrice(data.message[0].itemnewprice);
                setCurrency(data.message[0].currency);
            }
        });
    }, [id]);

    if(itemId.length > 0) {
        return (
            <div className="products">
                <Head>
                    <title>{itemName}</title>
                    <meta name="description" content={itemDescShort} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
                <main className="container">
                    <p>ID: {itemId}</p>
                    <p>Name: {itemName}</p>
                    <p>Desc: {itemDescShort}</p>
                    <p>desc long: {itemDescLong}</p>
                </main>
                <Footer />
            </div>
        );
    } else {
        return(
            <div className="products">
                <Head>
                    <title>Shopping App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
                <main className="container">
                    <p>data doesnt exist</p>
                </main>
                <Footer />
            </div>
        );
    }
}