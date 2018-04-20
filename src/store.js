import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchCheeses from './reducers/cheese';

const store = createStore(fetchCheeses, applyMiddleware(thunk));

export default store; 