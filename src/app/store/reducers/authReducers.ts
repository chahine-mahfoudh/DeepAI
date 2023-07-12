/* eslint-disable @typescript-eslint/no-explicit-any */
// auth reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const signUp = createAsyncThunk(
  "auth/signUp",
  async (registerData: any, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/save_user/", registerData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data.message || error?.toJSON()?.message || "Error"
      );
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (loginData: any, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login/", loginData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data.message || error?.toJSON()?.message || "Error"
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as any,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null as any,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
