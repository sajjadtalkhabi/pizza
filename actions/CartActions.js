export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
    let cartItem = {
        _id: pizza._id,
        name: pizza.name,
        image: pizza.image,
        varient: varient,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity,
    }
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    const cartItems = getState().CartReducer.cartItems;
    localStorage.setItem('cart_items', JSON.stringify(cartItems));
}
export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
    const cartItems = getState().CartReducer.cartItems;
    localStorage.setItem('cart_items', JSON.stringify(cartItems));
}