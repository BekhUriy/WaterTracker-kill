import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://https://watertrackerbackend-uo3w.onrender.com/api/',
});

export const signUpApi = async (body) => {
@@ -27,7 +27,7 @@ export const loginApi = async (body) => {
export const refreshApi = async (token) => {
  try {
    const { data } = await authApi.post(
      'auth/current',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Error in refreshApi:', error);
    throw error;
  }
};
export const logoutApi = async (token) => {
  try {
    const { data } = await authApi.post(
      'auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Error in logoutApi:', error);
    throw error;
  }
};