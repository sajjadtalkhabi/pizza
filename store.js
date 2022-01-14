import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadPizzasReducer } from './reducers/PizzaReducer';
import { CartReducer } from './reducers/CartReducer';

const finalReducer = combineReducers({
    loadPizzasReducer: loadPizzasReducer,
    CartReducer
});
const cartItems = localStorage.getItem('cart_items') ? JSON.parse(localStorage.getItem('cart_items')) : [];
const initialState = {
    CartReducer: {
        cartItems
    }
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;