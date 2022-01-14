export const loadPizzasReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case 'LOAD_PIZZAS': return {
            loading: true,
            ...state
        }
        case 'GET_PIZZAS_SUCCESS': return {
            loading: false,
            pizzas: action.payload
        }
        case 'GET_PIZZAS_FAILED': return {
            err: action.payload,
            loading: false
        }
        default: return state;
    }
}