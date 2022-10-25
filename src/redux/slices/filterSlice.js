import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesId: 0,
  currentPage: 1,
  sort: {
    name: "популярность",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoriesId(state, action) {
      console.log("state", state.categoriesId);
      state.categoriesId = action.payload;
    },
    setSort(state, action) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoriesId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
