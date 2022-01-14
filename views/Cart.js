import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/CartActions';
import { Modal } from 'react-bootstrap';
export default function Cart() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cartState = useSelector(state => state.CartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    function AddToCart(item, quantity, varient) {
        console.log(item.quantity - 1);
        if (quantity <= 0) {
            handleShow()
            return;
        }
        if (quantity > 10) {
            handleShow()
            return;
        }
        dispatch(addToCart(item, quantity, varient));
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <h3>My Cart</h3>
                    <div className="container mt-4">
                        {cartItems.map(item => {
                            return <div key={item._id} className="row align-items-center">
                                <div className="text-left col-6">
                                    <h4>{item.name} [{item.varient}]</h4>
                                    <h5>Price : {item.quantity} * {item.prices[0][item.varient]}$ = {item.price}$ </h5>
                                    <h5 className="d-inline">Quantity :</h5>
                                    <i className="WMi-minus text-danger" aria-hidden="true" onClick={() => { AddToCart(item, item.quantity - 1, item.varient) }}></i>
                                    <b>{item.quantity}</b>
                                    <i className="WMi-plus text-success" aria-hidden="true" onClick={() => { AddToCart(item, item.quantity + 1, item.varient) }}></i>
                                    <hr />
                                </div>
                                <div className="col-3 text-right">
                                    <img src={item.image} alt="image" className="pizza__image__cart" />
                                </div>
                                <div className="col-3">
                                    <i className="WMi-trash text-danger" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                                </div>
                                {item.quantity - 1 <= 0 ?
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Remove Product</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <p>Are you sure you want to delete this product?</p>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <div className="w-100 d-flex justify-content-between">
                                                <button className="btn btn-danger" onClick={handleClose}>No, I Regret</button>
                                                <button className="btn btn-success" onClick={() => { dispatch(deleteFromCart(item)) }}>Yes, I Sure</button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    : <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Inventory is not enough</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <p>Sorry, the inventory is not more than this amount</p>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <button className="btn btn-success" onClick={handleClose}>Ok</button>
                                        </Modal.Footer>
                                    </Modal>
                                }
                            </div>
                        })}
                    </div>

                </div>
                <div className="col-md-4 text-center">
                    <h2>sub total : {subTotal}$</h2>
                    <button className="btn btn-danger">CHECK OUT</button>
                </div>
            </div>
        </div>
    )
}