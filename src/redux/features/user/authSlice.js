import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const initialState = {
//   user: null,
//   token: null,
//   isLoggedIn: false,
//   isLoading: false,
//   error: null,
//   status: 'idle',
// };

const initialState = {
  user: {
    name: 'AlmajiriDev',
    email: 'almajiri.dev@gmail.com',
  },
  token: 'null',
  isLoggedIn: true,
  isLoading: false,
  error: null,
  status: 'succeeded',
};
// registerUser async thunk
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://api.example.com/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// loginUser async thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://api.example.com/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// logoutUser async thunk
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await axios.post('https://api.example.com/logout');
  } catch (error) {
    console.error('Logout failed:', error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    clearAuthState: (state) => {
      Object.assign(state, initialState);
    },
    updateToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    clearAuthError: (state) => {
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearAuthError, clearAuthState, updateToken } = authSlice.actions;

export default authSlice.reducer;
