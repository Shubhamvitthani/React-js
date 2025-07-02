import { GET_PRODUCTS, SET_LOADING } from '../Action/AxoisAction';


const initialState = {
  products: [],
  loading: false,
};

const AxiosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default AxiosReducer;
