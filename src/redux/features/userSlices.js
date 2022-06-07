import { createSlice, current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoggedIn: false,
    loginUser: {},
  },
  reducers: {
    addUser: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        alert("Already Exits");
      }
      state.users = [...state.users, { ...action.payload, isAdmin: false }];
    },

    loginUser: (state, action) => {
      const tempArr = current(state).users;
      const user = tempArr.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.isLoggedIn = true;
        state.loginUser = user;
      } else {
        state.isLoggedIn = false;
        alert("Invalid Creds");
      }
      state.users = [...state.users];
    },

    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.loginUser = {};
    },
  },
});

export const { addUser, loginUser, setUserSuccess, logoutUser } =
  userSlice.actions;

export default userSlice.reducer;
