import { createSlice } from "@reduxjs/toolkit";

export const helperSlice = createSlice({
  name: "helper",
  initialState: {
    showFav: false,
  },
  reducers: {
    showFav: (state, action) => {
      state.showFav = !state.showFav;
    },
  },
});

export const { showFav } = helperSlice.actions;

export default helperSlice.reducer;
