// src/features/fetchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
});

const fetchSlice = createSlice({
  name: 'fetchProducts',
  initialState: { products: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default fetchSlice.reducer;
