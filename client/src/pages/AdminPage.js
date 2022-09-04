//  AdminPage.js
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import AppData from '../data/appdata.json';
import Card from 'react-bootstrap/Card';

const AdminPage = (props) => {
    const [ itemData, setItemData ] = useState(AppData.products);

    return (
        <div className="bg-light">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary" className="my-3 shadow-sm me-2">
                        <i className="bi bi-plus-circle-fill me-2"></i>
                        <span>Add Product</span>
                    </Button>
                    <Button variant="primary" className="my-3 shadow-sm">
                        <i className="bi bi-code-slash me-2"></i>
                        <span>Show JSON</span>
                    </Button>
                </div>
                <Card className="shadow-sm mb-4 border-0 py-3 text-center bg-success">
                    <Card.Body>
                        <p className="text-white m-0 fw-bold">Total Products</p>
                        <h1 className="text-white">{ itemData.length }</h1>
                    </Card.Body>
                </Card>
                <Accordion defaultActiveKey="0" flush>
                    {
                        itemData.map((item, index) => {
                            return(
                                <Accordion.Item eventKey={index + 1} key={index + 1} className="shadow-sm">
                                    <Accordion.Header className="w-100">
                                        <div className="my-2 w-100">
                                            <p className="fw-bold m-0 mb-1 text-decoration-underline">{ item.itemname }</p>
                                            <p className="text-muted m-0 mb-1">SKU: { item.itemid }</p>
                                            <p className="text-muted m-0">Category: { item.catname }</p>
                                        </div>
                                        <Button variant="danger" className="my-3 shadow-sm me-3">
                                            <i className="bi bi-x-circle-fill"></i>
                                        </Button>
                                    </Accordion.Header>
                                    <Accordion.Body className="py-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    );
}

export default AdminPage;