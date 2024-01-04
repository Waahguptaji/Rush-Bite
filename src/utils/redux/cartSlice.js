import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //Mutating the state here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      //Get the id of item to remove from action
      // Filter items array to remove that item
      // Return updated items array in state
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => {
        return item.card.info.id !== itemIdToRemove;
      });
    },
    clearCart: (state, action) => {
      state.items.length = 0; // => [ ]
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
