import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchCheese } from './reducers/cheese';

const store = createStore(fetchCheese, applyMiddleware(thunk));

export default store; 