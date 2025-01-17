import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      token: localStorage.getItem("token") || null,
    },
    reducers: {
        login: (state, action) => {
            console.log("Login payload:", action.payload); // Debug payload
            const { user, token } = action.payload;
          
            if (!token) {
              console.error("Token is missing in the login payload!");
              return;
            }
          
            state.user = user;
            state.token = token;
            localStorage.setItem('token', token);
            console.log("Stored token:", token);
          },
    logout: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem('token');
        },
    },
  });
  
  export const { login, logout } = AuthSlice.actions;
  export default AuthSlice.reducer;
  