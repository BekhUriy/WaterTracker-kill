import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, refreshThunk, signUpThunk } from './thunk'


const initialState = {
	token: '',
	profile: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.token = ''
			state.profile = null
		},
	},
	extraReducers: (builder) => {
		builder
            .addCase(signUpThunk.fulfilled,  (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
})
			.addCase(refreshThunk.rejected, (state) => {
				state.token = ''
				state.profile = null
				
			})
	},
})

export const authReducer = authSlice.reducer
 export const { logout } = authSlice.actions