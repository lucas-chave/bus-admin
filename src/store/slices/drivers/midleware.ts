import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { setUserApi } from "../../../utils/api";
import { ENDPOINTS } from "../../../config/endpoints";
import { IDriver } from "../../../types/drivers";
import { getAuthTokenUser } from "../../../utils/localStorage";
import { handleError } from "../../../utils/handleError";

export const fetchDrivers = createAsyncThunk(
  'drivers/fetch',
  async (_, thunkAPI) => {
    try {
      const token = getAuthTokenUser();
      setUserApi(token);
      const response = await api.get<IDriver[]>(ENDPOINTS.showDrivers);
      return response.data;
    } catch (error) {
      handleError(error, thunkAPI);
    }
  }
);

export const createDriver = createAsyncThunk(
  'driver/add',
  async (data: IDriver, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser().toString());
      const { id, ...rest } = data;
      const response = await api.post<IDriver>(ENDPOINTS.createDriver, rest);
      return response.data;
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);

export const updateDriver = createAsyncThunk(
  'driver/update',
  async (data: any, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser().toString());
      const { id, ...dataDriver } = data;
      const response = await api.put<IDriver>(ENDPOINTS.updateDriver(id), dataDriver);
      return response.data
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);
