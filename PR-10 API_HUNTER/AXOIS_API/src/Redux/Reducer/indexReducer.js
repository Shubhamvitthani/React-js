import { combineReducers } from 'redux';
import AxiosReducer from '../Reducer/axiosReducer';

const indexReducer = combineReducers({
  productData: AxiosReducer,
});

export default indexReducer;
