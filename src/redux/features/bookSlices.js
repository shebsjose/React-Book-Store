import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "bookstore",
  initialState: {
    books: [],
    favBooks: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },

    updateBook: (state, action) => {
      const updated = {
        ...action.payload,
      };
      const updateList = state.books.map((list) =>
        list.id === action.payload.id ? updated : list
      );
      state.books = updateList;
    },

    addFav: (state, action) => {
      // state.favBooks.push(action.payload);
      const arr = [...state.favBooks];
      arr.push(action.payload);
      state.favBooks = [...new Set(arr)];
      const updateList = state.books.map((list) =>
        list.id === action.payload.id ? action.payload : list
      );
      state.books = updateList;
    },

    removeFav: (state, action) => {
      const changeFav = state.books.find(
        (list) => list.id === action.payload.id
      );
      const updated = { ...changeFav, isFav: false };
      state.books = state.books.map((list) =>
        list.id === action.payload.id ? updated : list
      );
      state.favBooks = state.favBooks.filter(
        (li) => li.id !== action.payload.id
      );
    },
  },
});

export const { setBooks, updateBook, addFav, removeFav } = bookSlice.actions;

export default bookSlice.reducer;
