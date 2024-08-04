import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
  reducers: {
    setFilter(state, action) {
      console.log("action: ", action);
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
