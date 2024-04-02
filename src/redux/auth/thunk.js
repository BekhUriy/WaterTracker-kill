import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, refreshApi, signUpApi } from '../../API/ApiAuth';


export const signUpThunk = createAsyncThunk('auth/signUp', async (body, { rejectWithValue }) => {
	try {
		return await signUpApi(body)
	} catch (error) {
		return rejectWithValue(error.response.data.error)
	}
				
})

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
	try {
		return await loginApi(body)
	} catch (error) {
		console.log(error.response.data.error);
		return rejectWithValue(error.response.data.error)
	}
})

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue, getState }) => {
		try {
			return await refreshApi(getState().auth.token)
		} catch (error) {
			return rejectWithValue(error.response.data.error)
		}
	}
)

export const logoutThunk = createAsyncThunk(//дефолтна функція, потребує доопрацювання
	'auth/logout',
	async (_, { rejectWithValue, getState }) => {
		try {
			return await logoutApi(getState().auth.token)
		} catch (error) {
			return rejectWithValue(error.response.data.error)
		}
	}
)