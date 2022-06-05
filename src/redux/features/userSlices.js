import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoggedIn: false,
  },
  reducers: {
    addUser: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) alert("Already Exits");
      state.users = [...state.users, { ...action.payload, isAdmin: false }];
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((li) => li.id !== action.payload.id);
    },
    loginUser: (state, action) => {
      const tempArr = [...state.users];
      console.log(tempArr)
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
        alert("Invalid Creds");
      }
      state.users = [...state.users];
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    }
  },
});

export const {
  addUser,
  removeUser,
  loginUser,
  setUserSuccess,
  logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
