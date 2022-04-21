import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { setUserApi } from "../../../utils/api";
import { ENDPOINTS } from "../../../config/endpoints";
import {  IClient } from "../../../types/clients";
import { getAuthTokenUser } from "../../../utils/localStorage";
import { handleError } from "../../../utils/handleError";

export const fetchClients = createAsyncThunk(
  'clients/fetch',
  async (_, thunkAPI) => {
    try {
      const token = getAuthTokenUser();
      setUserApi(token);
      const response = await api.get<IClient[]>(ENDPOINTS.showClients);
      console.log(response.data);
      return response.data;
    } catch (error) {
      handleError(error, thunkAPI);
    }
  }
)