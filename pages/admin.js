//  admin.js
//  admin page used to manage data

import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminPage = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="bg-light vh-100">
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header>
                    <Modal.Title className="fw-bold">Add Product</Modal.Title>
                    <div>
                        <Button
                            className="me-1"
                            variant="primary"
                            onClick={handleClose}
                        >
                            <i className="bi bi-save-fill me-2"></i>
                            <span>ADD</span>
                        </Button>
                    </div>
                </Modal.Header>
                <Modal.Body className="py-4 bg-light rounded">
                    Woohoo, youre reading this text in a modal!
                </Modal.Body>
            </Modal>
            <main>
                <section className="py-3 border-bottom shadow-sm">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div></div>
                        <div>
                            <Button
                                className="rounded-1 shadow-sm me-1"
                                variant="primary"
                                onClick={handleShow}
                            >
                                <i className="bi bi-plus-circle-fill me-2"></i>
                                <span>ADD</span>
                            </Button>
                            <Button
                                className="rounded-1 shadow-sm"
                                variant="success"
                                onClick={handleShow}
                            >
                                <i className="bi bi-save-fill me-2"></i>
                                <span>SAVE</span>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="container my-4 mh-100">
                    <Accordion defaultActiveKey="0" flush className="shadow-sm">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="fw-bold">
                                Accordion Item #1
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="fw-bold">
                                Accordion Item #2
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>
            </main>
        </div>
    );
};

export default AdminPage;
