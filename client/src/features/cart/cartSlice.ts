import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type mealObj = {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
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
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const updated = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItem = state.items[index];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[index] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
    removeItemFromCart: (state, action) => {},
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
