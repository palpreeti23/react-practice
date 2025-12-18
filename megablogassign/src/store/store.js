import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./storeSlice";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
