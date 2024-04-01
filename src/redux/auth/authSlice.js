import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, signUpThunk } from './thunk';

const initialState = {
  token: '',
  profile: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.profile = null;
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
        state.isLogin = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.token = '';
        state.profile = null;
        state.isLogin = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
