import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/counter";

export const store = configureStore({
  reducer: counterReducer,
});
