import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice"; // Import the auth reducer
import postReducer from "./PostSlice"; // Import the post reducer

const store = configureStore({
    reducer: {
        auth: authReducer,  // This slice will manage the authentication state
        posts: postReducer, // This slice will manage the posts state
    },
});

export default store;
