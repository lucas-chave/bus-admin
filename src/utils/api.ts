import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.PUBLIC_END_POINT,
  baseURL: 'http://0.0.0.0:3001',
});

// api.interceptors.request.use((config) => {
//   const token = getAuthTokenUser();
//   (config.headers as any).Authorization = `bearer ${token}`;
//   return config;
// });

export const setUserApi = (token: string) => {
  api.defaults.headers.common['Authorization'] = `bearer ${token}`;
};

export default api;
