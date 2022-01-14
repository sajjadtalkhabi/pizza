import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const cartState = useSelector(state => state.CartReducer);
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 bg-white rounded">
                <Link to="/" className="navbar-brand">SAJJAD PIZZA</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">Cart {cartState.cartItems.length}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
