// src/features/axiosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ✅ Thunk action for fetching products using Axios
export const getProductsAxios = createAsyncThunk('axios/products', async () => {
  const res = await axios.get('https://dummyjson.com/products');
  return res.data.products;
});

// ✅ Slice to handle the product state
const axiosSlice = createSlice({
  name: 'axiosProducts',
  initialState: {
    products: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAxios.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsAxios.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsAxios.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default axiosSlice.reducer;
