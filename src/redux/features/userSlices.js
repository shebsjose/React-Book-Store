import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
        state.users = [...state.users,{...action.payload,  isAdmin: false }];
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((li) => li.id !== action.payload.id);
    },

    userAdmin: (state, action) => {
      state.users = [...state.users,{...action.payload, isAdmin: true }];
    },
  },
});

export const { addUser, removeUser, userAdmin } = userSlice.actions;

export default userSlice.reducer;
