import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../../config/endpoints";
import { IBus } from "../../../types/bus";
import api, { setUserApi } from "../../../utils/api";
import { handleError } from "../../../utils/handleError";
import { getAuthTokenUser } from "../../../utils/localStorage";

export const fetchBus = createAsyncThunk(
  'bus/fetch',
  async (_, thunkAPI) => {
    try {
      const token = getAuthTokenUser();
      setUserApi(token);
      const response = await api.get<IBus[]>(ENDPOINTS.showBus);
      console.log(response.data);
      return response.data;
    } catch (error) {
      handleError(error, thunkAPI);
    }
  }
);

export const createBus = createAsyncThunk(
  'bus/add',
  async (data: IBus, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser());
      console.log(data);
      
      const response = await api.post<IBus>(ENDPOINTS.createBus, data);
      console.log(response);
      
      return response.data;
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);

export const updateBus = createAsyncThunk(
  'bus/update',
  async (data: any, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser().toString());
      const { id, ...rest } = data;
      const response = await api.put<IBus>(ENDPOINTS.updateBus(id), rest);
      return response.data
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);