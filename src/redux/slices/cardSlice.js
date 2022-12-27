import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  item: [],
};

export const cardSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.item.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.item.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.item.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.item.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action) {
      state.item = state.item.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.item = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cardSlice.actions;

export default cardSlice.reducer;

export const selectCard = (state) => state.card;
export const selectCardItem = (id) => (state) =>
  state.card.item.find((obj) => obj.id === id);
