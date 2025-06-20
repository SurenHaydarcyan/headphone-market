import { instance } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCartThunk = createAsyncThunk(
  "cart/getCart",
  async function (_, thunkAPI) {
    try {
      const config = {
        method: "GET",
        url: "cart",
      };
      const response = await instance(config);

      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postCartThunk = createAsyncThunk(
  "cart/postCart",
  async function (body, thunkAPI) {
    try {
      const config = {
        method: "POST",
        url: "cart",
        data: body,
      };
      const response = await instance(config);

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const putCartThunk = createAsyncThunk(
  "cart/putCart",
  async function (body, thunkAPI) {
    try {
      const config = {
        method: "PUT",
        url: `cart/${body.id}`,
        data: body,
      };
      const response = await instance(config);


      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteCartThunks = createAsyncThunk(
  "cart/cartDelete",
  async (cartItemId, thunkAPI) => {
    try {
      const config = {
        method: "DELETE",
        url: `cart/${cartItemId}`,
      };
      await instance(config);
      return cartItemId; 
    } catch (error) {
      console.error("Ошибка при удалении из корзины:", error);
      return thunkAPI.rejectWithValue(error.response?.data || "Delete error");
    }
  }
);