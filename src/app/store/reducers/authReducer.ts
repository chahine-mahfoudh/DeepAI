/* eslint-disable @typescript-eslint/no-explicit-any */
// auth reducer

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../config/axios/axiosConfig'

export const signUp = createAsyncThunk('auth/signUp', async (registerData: any, thunkAPI) => {
  try {
    const {data} = await axiosInstance.post('/users/save_user/', registerData)
    return data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data.message || error?.toJSON()?.message || 'Error'
    )
  }
})

export const signIn = createAsyncThunk('auth/signIn', async (loginData: any, thunkAPI) => {
  try {
    const {data} = await axiosInstance.post('/users/login/', loginData)
    return data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data.message || error?.toJSON()?.message || 'Error'
    )
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: {
      email: '',
      first_name: '',
      last_name: '',
      username: '',
    },
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null as any,
  },
  reducers: {
    signOut: (state) => {
      state.currentUser = {
        email: '',
        first_name: '',
        last_name: '',
        username: '',
      }
      state.token = null
      state.refreshToken = null
      state.isAuthenticated = false
      state.isLoading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false
      state.currentUser = {
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
      }
      state.token = action.payload.access
      state.refreshToken = action.payload.refresh
      state.isAuthenticated = true
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false
      state.currentUser = {
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
      }
      state.token = action.payload.access
      state.refreshToken = action.payload.refresh
      state.isAuthenticated = true
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})
export const {signOut} = authSlice.actions
export default authSlice.reducer
