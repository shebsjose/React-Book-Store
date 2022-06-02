import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlices";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlices";
import { combineReducers } from "redux";
import helperReducer from "./features/helperSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  book: bookReducer,
  user: userReducer,
  helper: helperReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
