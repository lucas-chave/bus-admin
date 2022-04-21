import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../../config/endpoints";
import { IDriver } from "../../../types/drivers";
import api, { setUserApi } from "../../../utils/api";
import { handleError } from "../../../utils/handleError";
import { getAuthTokenUser } from "../../../utils/localStorage";

export const createDriver = createAsyncThunk(
  'driver/add',
  async (data: IDriver, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser().toString());
      const { id, ...rest } = data;
      console.log(rest);
      const response = await api.post<IDriver>(ENDPOINTS.createDriver, rest);
      console.log(response);
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
