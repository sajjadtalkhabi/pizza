import axios from 'axios';
export const registerUser = () => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });

    try {
        let response = await axios.post('/api/users/register', { user });
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
    } catch (err) {
        dispatch({ type: 'USER_REGISTER_FAILED' , payload: err });
    }
}