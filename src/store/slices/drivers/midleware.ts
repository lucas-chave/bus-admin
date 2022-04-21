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
      console.log('ss');
      
      const response = await api.get<IDriver[]>(ENDPOINTS.showDrivers);
      return response.data;
    } catch (error) {
      handleError(error, thunkAPI);
    }
  }
)