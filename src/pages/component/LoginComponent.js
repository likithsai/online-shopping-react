//  LoginComponent.js

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const LoginComponent = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton className="shadow-sm bg-success text-white">
                <Modal.Title id="contained-modal-title-vcenter">
                    <i class="bi bi-box-arrow-in-right me-2"></i>
                    <span>Login</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="my-3">
                <h4>Centered Modal</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer className="shadow-sm">
                <Button onClick={props.onHide}>
                    <i class="bi bi-box-arrow-in-right me-2"></i>
                    <span>Login</span>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginComponent;