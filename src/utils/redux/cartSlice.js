import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItems: (state, action) => {
      //Mutating the state here
      state.items.push(action.payload);
      const newItemPrice =
        action.payload.card.info.price || action.payload.card.info.defaultPrice; // Get item price
      state.totalPrice += newItemPrice;
    },
    removeItems: (state, action) => {
      //Get the id of item to remove from action
      // Filter items array to remove that item, only return the items which doesnot match with id
      // Return updated items array in state
      const itemIdToRemove = action.payload.card.info.id;
      //Get the id of item to substract price and then filter it when id of both matches and then substract from totalPrice
      const priceIdToRemove =
        action.payload.card.info.price || action.payload.card.info.defaultPrice; // Get item price
      //Removing items from cart
      state.items = state.items.filter((item) => {
        return item.card.info.id !== itemIdToRemove;
      });
      state.totalPrice -= priceIdToRemove;
    },
    clearCart: (state, action) => {
      state.items.length = 0; // => [ ]
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
