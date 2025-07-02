import { combineReducers } from 'redux';
import apiReducer from '../Reducer/apiReducer';

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
