import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    value: [],
  },
  reducers: {
    addFilter: (state, action) => {
      if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      const index = state.value.indexOf(action.payload);
      state.value.splice(index, 1);
    },
    clearFilters: (state, action) => {
      state.value = []
    }
  },
});

export const { addFilter, removeFilter , clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
