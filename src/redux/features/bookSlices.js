import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "bookstore",
  initialState: {
    books: [],
    favBooks: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.favBooks = state.favBooks.push(action.payload);
    },
    
    removeFav: (state, action) => {
      const changeFav = state.find((list) => list.id === action.payload);
      const updated = { ...changeFav, fav: false };
      state = state.map((list) =>
        list.id === action.payload ? updated : list
      );
      state.bestOfBest = state.bestOfBest.filter(
        (li) => li.id !== action.payload
      );
    },
  },
});

export const { addFav, removeFav } = bookSlice.actions;

export default bookSlice.reducer;
