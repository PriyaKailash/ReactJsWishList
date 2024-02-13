import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
},

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state,action) => {
      // state.item.pop()
      state.item.splice(action.payload,1)
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export const selectedItem = (state) => state.wishlist.item;
export default wishlistSlice.reducer;
