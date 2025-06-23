import { createSlice } from '@reduxjs/toolkit';

const initialState = {tasks: [],category: '',};

const taskSlice = createSlice({
  name: 'task',
  initialState,
   reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        done: false,
        cancelled: false,
      });
    },
    markDone: (state, action) => {
      const task = state.tasks[action.payload];
      if (task) {
        task.done = true;
        task.cancelled = false;
      }
    },
    markCancelled: (state, action) => {
      const task = state.tasks[action.payload];
      if (task) {
        task.cancelled = true;
        task.done = false;
      }
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
    clearTasks: (state) => {
      state.tasks = [];
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {
  addTask,
  markDone,
  markCancelled,
  deleteTask,
  clearTasks,
  setCategory,
} = taskSlice.actions;

export default taskSlice.reducer;
