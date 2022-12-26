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
      state.categoriesId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoriesId = Number(action.payload.categoriesId);
      state.sort.sortProperty = action.payload.sortProperty;
    },
  },
});

export const { setCategoriesId, setSort, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
