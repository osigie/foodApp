import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type mealObj = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export interface cartState {
  items: Array<mealObj>;
  totalAmount: number;
}

const initialState: cartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items = state.items.concat(action.payload.item);
      state.totalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;
    },
    removeItemFromCart: (state, action) => {},
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
