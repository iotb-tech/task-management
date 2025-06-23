import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Slice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});