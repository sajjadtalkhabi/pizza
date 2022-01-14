import axios from 'axios';
export const getPizzas = () => async dispatch => {
    dispatch({ type: 'LOAD_PIZZAS' });
    
    try {
        const response = await axios.get('http://localhost:8080/api/pizzas/all');
        dispatch({ type: 'GET_PIZZAS_SUCCESS',payload: response.data})
    } catch (err) {
        dispatch({ type: 'GET_PIZZAS_FAILED',payload: err})
    }
} 