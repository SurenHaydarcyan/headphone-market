import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getProductThunk = createAsyncThunk(
  "product/get",
  async function (_, thunkAPI) {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return products;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message || "Ошибка загрузки");
    }
  }
);
