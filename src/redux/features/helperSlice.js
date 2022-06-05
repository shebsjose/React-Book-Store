import { createSlice } from "@reduxjs/toolkit";

export const helperSlice = createSlice({
  name: "helper",
  initialState: {
    showFav: false,
    isGridView: false
  },
  reducers: {
    showFav: (state, action) => {
      state.showFav = !state.showFav;
    },
    showGridView: (state, action) => {
      state.isGridView = !state.isGridView;
    }
  },
});

export const { showFav, showGridView } = helperSlice.actions;

export default helperSlice.reducer;
