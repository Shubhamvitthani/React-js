import { createStore, combineReducers, applyMiddleware } from 'redux';
import recipesReducer from './reducers/recipesReducer';
import authReducer from './reducers/authReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
