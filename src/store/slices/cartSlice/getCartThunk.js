import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase"; // քո firebase.js ֆայլից
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const getCartThunk = createAsyncThunk(
  "cart/getCart",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "cart"));
      const cartItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return cartItems;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const postCartThunk = createAsyncThunk(
  "cart/postCart",
  async (body, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "cart"), body);
      return { id: docRef.id, ...body };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const putCartThunk = createAsyncThunk(
  "cart/putCart",
  async (body, thunkAPI) => {
    try {
      const docRef = doc(db, "cart", body.id);
      await updateDoc(docRef, body);
      return body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteCartThunks = createAsyncThunk(
  "cart/cartDelete",
  async (cartItemId, thunkAPI) => {
    try {
      const docRef = doc(db, "cart", cartItemId);
      await deleteDoc(docRef);
      return cartItemId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
