import { createSlice } from '@reduxjs/toolkit'

export const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
export const handleRejected = (state, { payload, error }) => {
	state.isLoading = false
	state.error = payload?.message || payload || error?.message || 'some error'
}
export const handleFulfilled = (state) => {
	state.isLoading = false
}

const rootSlice = createSlice({
	name: 'root',
	initialState: {
		isLoading: false,
		error: '',
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
			.addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
	},
})

export const rootReducer = rootSlice.reducer