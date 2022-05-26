
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/bookSlices';


export const store = configureStore({
  reducer: { 
    book : bookReducer,
  },
});