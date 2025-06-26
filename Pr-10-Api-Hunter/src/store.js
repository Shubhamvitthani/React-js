// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import axiosReducer from './Reducer/axiosSlice';
import fetchReducer from './Reducer/fetchSlice';

const store = configureStore({
  reducer: {
    axiosProducts: axiosReducer,  
    fetchProducts: fetchReducer    
  },
});

export default store;
