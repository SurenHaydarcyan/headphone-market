import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk } from "./getProductThunk";

const initialState = {
  data: [],
  loading: "pending",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = "fulfilled";
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
  
      });
  },
});

export const selectProducts = (state) => state.product;

export const {} = productSlice.actions;
export const productReducer = productSlice.reducer;
