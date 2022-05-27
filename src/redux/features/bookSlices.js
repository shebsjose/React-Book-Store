import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "bookstore",
  initialState: {
    books: [],
    favBooks: [],
  },
  reducers: {
    setBooks: (state, action) =>{
      state.books = action.payload;
    },

    updateBook:(state,action) => {
      const updated = {...action.payload, address: { city : action.payload.city}}
      const updateList = state.books.map((list) =>
      list.id === action.payload.id ? updated : list
      );
     state.books = updateList

    },

    addFav: (state, action) => {
     state.favBooks.push(action.payload);
    },

    removeFav: (state, action) => {
      const changeFav = state.find((list) => list.id === action.payload);
      const updated = { ...changeFav, isFav: false };
      state = state.map((list) =>
        list.id === action.payload ? updated : list
      );
      state.bestOfBest = state.bestOfBest.filter(
        (li) => li.id !== action.payload
      );
    },


  },
});

export const { setBooks, updateBook, addFav, removeFav } = bookSlice.actions;

export default bookSlice.reducer;
