import { createStore, applyMiddleware } from 'redux';
import indexReducer from './Redux/Reducer/indexReducer';
import { thunk } from 'redux-thunk';

const store = createStore(indexReducer, applyMiddleware(thunk));

export default store;
