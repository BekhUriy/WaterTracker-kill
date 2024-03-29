import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://';

export const fetchWaterPortionsList = async () => {
  try {
    const responce = await axios.get('/portions');
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log(error)
  }
};
export const addWaterPortion = async ({portion }) => {
  try {
    const responce = await axios.post('/portions', portion);
    return responce.data;
  } catch (error) {
    console.log(error)
  }
};
export const deleteContact = async id => {
  try {
    const responce = await axios.delete(`/portions/${id}`);
    return responce.data;
  } catch (error) {
    console.log(error)
  }
};
export const getWaterPortionsThunk = createAsyncThunk(
  'portions/fetchAll',
  async () => {
    return await fetchWaterPortionsList();
  }
);
export const addPortionThunk = createAsyncThunk(
  'portions/addPortion',
  portion => addWaterPortion({ portion })
);
export const deletePortionThunk = createAsyncThunk(
  'portions/deletePortion',
  id => deletePortionThunk(id)
);
