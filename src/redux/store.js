import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './slices/burgerSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    burger: burgerReducer,
  },
});
