import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params, thunkApi) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6340350ed1fcddf69cb3e3ea.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "received";
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.items = [];
        state.status = "rejected";
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

export const selectPizzaData = (state) => state.pizza;
