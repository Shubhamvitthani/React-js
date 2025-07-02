import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_LOADING = 'SET_LOADING';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const res = await axios.get(`https://dummyjson.com/products`);
    dispatch({ type: GET_PRODUCTS, payload: res.data.products });
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  dispatch({ type: SET_LOADING, payload: false });
};
