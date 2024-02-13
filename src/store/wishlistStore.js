import { configureStore } from '@reduxjs/toolkit';
import wishlistSlice from '../slice/wishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
  },
});
