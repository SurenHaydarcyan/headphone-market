import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenBurgerMenu: false,
};

const burgerMenuSlice = createSlice({
  name: "viewBurgerMenu",
  initialState,
  reducers: {
    closeMenu: (state) => {
      state.isOpenBurgerMenu = false;
    },
    toggleBurgerMenu: (state) => {
      state.isOpenBurgerMenu = !state.isOpenBurgerMenu;
    },
  },
});

export const selectIsOpenMenu = (state) =>
  state.viewBurgerMenu.isOpenBurgerMenu;
export const { toggleBurgerMenu,closeMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
