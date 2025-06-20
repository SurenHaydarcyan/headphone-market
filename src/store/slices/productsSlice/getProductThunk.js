  import { instance } from "@/axios";
  import { createAsyncThunk } from "@reduxjs/toolkit";


  export const getProductThunk = createAsyncThunk(
    "product/get",
    async function (_, thunkAPI) {
      try {
        const config = {
          method: "GET",
          url: "products",
        };
        const response = await instance(config);


        return response.data;
      } catch (error) {
        console.error(error);
         return thunkAPI.rejectWithValue(error.response?.data || "Ошибка загрузки");
      }
    }
  );




