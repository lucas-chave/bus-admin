import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILogin } from '../../../types/auth';
import { ENDPOINTS } from '../../../config/endpoints';
import { IResponseLogin } from '../../../types/auth';
import api, { setUserApi } from '../../../utils/api';
import { setAuthTokenUser } from '../../../utils/localStorage';

export const login = createAsyncThunk(
  'login/login',
  async (credentials: ILogin, thunkAPI) => {
    try {
      const auth = { user: { username: credentials.username, password: credentials.password }};
      const response = await api.post<IResponseLogin>(ENDPOINTS.login, auth);
      setUserApi(response.data.token)
      setAuthTokenUser(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createUser = createAsyncThunk(
  'createUser/add',
  async (_, thunkAPI) => {
    try {
      const response = await api.post(ENDPOINTS.createUser, { email: 'email@email.com', user: 'admin', password: '123456' });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);