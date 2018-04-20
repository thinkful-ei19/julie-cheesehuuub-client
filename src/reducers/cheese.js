import { FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS, FETCH_CHEESE_ERROR } from '../actions/cheese';

const initialState =   {
    cheeses: [],
    loading: false,
    error: null
}


const fetchCheeses = (state=initialState, action) => {
    if (action.type === FETCH_CHEESE_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type === FETCH_CHEESE_SUCCESS) {
        console.log(action);
        return {
            ...state,
            cheeses: action.cheeses
        }
    }
    if (action.type === FETCH_CHEESE_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    
    return state;
};

export default fetchCheeses;


//MUST RETURN STATE!!!!