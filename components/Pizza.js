import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { addToCart } from '../actions/CartActions'
export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    function AddToCart() {
        dispatch(addToCart(pizza, parseInt(quantity), varient))
    }
    return (
        <div className="shadow-lg p-3 mb-3 bg-white rounded pizza_card">
            <div onClick={handleShow}>
                <h5 className="pizza__name">{pizza.name}</h5>
                <img src={pizza.image} alt="pizza image" className="img-fluid pizza__image mt-1" />
            </div>
            <div className="d-flex">
                <div className="w-100 m-1">
                    <p>Varient</p>
                    <select className="form-control" name="varient" id="varient" value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option key={varient} value={varient}>{varient}</option>;
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" name="quantity" id="quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option key={i} value={i + 1}>{x + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <h5 className="mt-2 text-left">Price : {pizza.prices[0][varient] * quantity}$</h5>
                </div>
                <div className="col-6 w-100">
                    <button className="float-right w-100 custom-btn btn" onClick={AddToCart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="text-center">
                        <img src={pizza.image} alt="pizza image modal" className="pizza__image__modal" />
                    </div>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
