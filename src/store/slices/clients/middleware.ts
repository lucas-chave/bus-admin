import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { setUserApi } from "../../../utils/api";
import { ENDPOINTS } from "../../../config/endpoints";
import {  ICity, IClient } from "../../../types/clients";
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
);

export const createClient = createAsyncThunk(
  'client/add',
  async (data: IClient, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser());
      const { id, ...rest } = data;
      const response = await api.post<IClient>(ENDPOINTS.createClient, rest);
      return response.data;
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);

export const updateClient = createAsyncThunk(
  'client/update',
  async (data: any, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser().toString());
      const { id, ...dataClient } = data;
      const response = await api.put<IClient>(ENDPOINTS.updateClient(id), dataClient);
      return response.data
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);

export const fetchCitiesClient = createAsyncThunk(
  'cities/fetch',
  async (_, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser());
      const response = await api.get<ICity[]>(ENDPOINTS.showCities);
      return response.data
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);
