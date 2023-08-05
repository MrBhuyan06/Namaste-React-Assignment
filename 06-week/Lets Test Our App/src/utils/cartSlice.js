import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
  },
});
export const { addItems, clearCart, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
