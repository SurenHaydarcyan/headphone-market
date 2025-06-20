import { configureStore } from "@reduxjs/toolkit";
import viewBurgerMenuReducer from './slices/burgerMenuSlice/burgerMenuSlice'
import { productReducer } from "./slices/productsSlice/productsSlice";
import { CartReducer } from "./slices/cartSlice/CartSlice";



export const store = configureStore({
    reducer:{
        viewBurgerMenu: viewBurgerMenuReducer,
        product: productReducer,
        cart: CartReducer
    }
})