import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import OrderJumboltron from "../component/OrderJumboltron";
import { useSelector, useDispatch } from 'react-redux';
import LoginModal from '../component/LoginModal';
import Link from "next/link";

const Orders = (props) => {
    return (
        <>
            <Header headerTitle="Shopping App" logoURL="/" cartURL="/cart" />
            <main>
                <OrderJumboltron jumboltronTitle="Total Items Ordered" jumboltronSubtitle={"10"} />
                <div class="container px-0 px-lg-5">
                    <table class="table table-sm table-responsive m-0">
                        <tbody>
                            <tr>
                                <td class="p-3">Mark</td>
                            </tr>
                            <tr>
                                <td class="p-3">Mark</td>
                            </tr>
                            <tr>
                                <td class="p-3">Mark</td>
                            </tr>
                            <tr>
                                <td class="p-3">Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer copyrightText="© 2022 Company, Inc" />
        </>
    );
}

export default Orders;