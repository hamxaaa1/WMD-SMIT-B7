import { configureStore } from '@reduxjs/toolkit'
import addStudentReducer from './slices/addStudentSlice';

export const store = configureStore({
  reducer: addStudentReducer
});