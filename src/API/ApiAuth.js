import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://https://watertrackerbackend-uo3w.onrender.com/api/',
});

export const signUpApi = async (body) => {
  try {
    const { data } = await authApi.post('auth/signup', body);
    return data;
  } catch (error) {
    console.error('Error in signUpApi:', error);
    throw error;
  }
};

export const loginApi = async (body) => {
  try {
    const { data } = await authApi.post('auth/login', body);
    return data;
  } catch (error) {
    console.error('Error in loginApi:', error);
    throw error;
  }
};

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

// import axios from "axios"
// export const authApi = axios.create({
//   baseURL: 'https://practices-api.vercel.app/',
// })

// export const signUpApi = async (body) => {
//   const { data } = await authApi.post('auth/signup', body)
//   return data
// }

// export const loginApi = async (body) => {
//   const { data } = await authApi.post('auth/login', body)
//   return data
// }

// export const refreshApi = async (token) => {
//   const { data } = await authApi('auth/refresh', {
//     headers: {
//       Authorization: Bearer ${token},
//     },
//   })
//   return data
// }

// export const logoutApi = async token => {
//   const { data } = await authApi.post(
//     'auth/logout',
//     {},
//     {
//       headers: {
//         Authorization: Bearer ${token},
//       },
//     }
//   );
//   return data;
// };
