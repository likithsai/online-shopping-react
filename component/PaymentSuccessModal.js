import React, { memo } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PaymentSuccessModal = (props) => {
    return (
        <Modal show={ props.showPaymentModal } centered>
            <Modal.Header>
                <Modal.Title className="text-center w-100">
                    <span>Payment Complete</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-5 text-center">
                <i className="bi bi-check-circle-fill me-2 display-1 text-success"></i>
                <p className="mt-3">Thank you, your payment has been successful. A confirmation email has been sent to your email.</p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center align-items-center">
                <Button variant="dark" onClick={props.onCloseButtonClick}>
                    <i className="bi bi-x-circle-fill me-2"></i>
                    <span>Close</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default memo(PaymentSuccessModal);