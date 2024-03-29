
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {  addPortionThunk, deletePortionThunk, getWaterPortionsThunk } from './addWaterOperations';

const InitialState = {
  portions: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.portions = action.payload;
};
const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.portions.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.portions = state.portions.filter(el => el.id !== action.payload.id);
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const addWaterSlice = createSlice({
  name: 'portions',
  initialState: InitialState,
  extraReducers: builder => {
    builder
      .addCase(getWaterPortionsThunk.fulfilled, handleFulfilled)
      .addCase(addPortionThunk.fulfilled, handleFulfilledAdd)
      .addCase(deletePortionThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.pending,
          addPortionThunk.pending,
          deletePortionThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.rejected,
          addPortionThunk.rejected,
          deletePortionThunk.rejected
        ),
        handleRejected
      );
  },
});
export const portionsReducer = addWaterSlice.reducer;
