import { createSlice } from "@reduxjs/toolkit";
import { deleteCartThunks, getCartThunk, postCartThunk } from "./getCartThunk";

const initialState = {
  cart: [],
  loading: "idle",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload);
      if (product) {
        product.count += 1;
        product.price = product.basePrice * product.count;
      }
    },
    decrementCount: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload);
      if (product && product.count > 1) {
        product.count -= 1;
        product.price = product.basePrice * product.count;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartThunk.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getCartThunk.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = "fulfilled";
      })
      .addCase(getCartThunk.rejected, (state) => {
        state.loading = "rejected";
      })
      .addCase(postCartThunk.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(postCartThunk.fulfilled, (state, action) => {
        state.cart.push(action.payload);
        state.loading = "fulfilled";
      })
      .addCase(postCartThunk.rejected, (state) => {
        state.loading = "rejected";
      })
      .addCase(deleteCartThunks.fulfilled, (state, action) => {
        const deletedItemId = action.payload; // նկատի ունեցիր, որ thunk-ը պետք է վերադարձնի id
        state.cart = state.cart.filter((item) => item.id !== deletedItemId);
        state.loading = "fulfilled";
      })
      .addCase(deleteCartThunks.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteCartThunks.rejected, (state) => {
        state.loading = "rejected";
      });
  },
});

export const selectCart = (state) => state.cart;
export const { incrementCount, decrementCount } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
