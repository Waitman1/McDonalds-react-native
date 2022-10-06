import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  burger: {
    id: null,
    name: null,
    price: null,
    image: null,
  },
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setBurger: (state, action) => {
      state.burger = action.payload;
    },
  },
});

export const { setBurger } = burgerSlice.actions;

export const selectBurger = (state) => state.burger.burger;

export default burgerSlice.reducer;
