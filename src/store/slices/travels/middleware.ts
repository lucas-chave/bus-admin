import { createAsyncThunk } from "@reduxjs/toolkit";

import api, { setUserApi } from "../../../utils/api";
import { getAuthTokenUser } from "../../../utils/localStorage";
import { handleError } from "../../../utils/handleError";

import { ENDPOINTS } from "../../../config/endpoints";

import { ITravel } from "../../../types/travel";

export const fetchTravels = createAsyncThunk(
  'travels/fetch',
  async (_, thunkAPI) => {
    try {
      const token = getAuthTokenUser();
      setUserApi(token);
      const response = await api.get<ITravel[]>(ENDPOINTS.showTravels);
      return response.data;
    } catch (error) {
      handleError(error, thunkAPI);
    }
  }
);

export const createTravel = createAsyncThunk(
  'travel/add',
  async (data: ITravel, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser())
      const { id, ...rest } = data;
      const travelCreate = { ...rest, status: "open" };
      const response = await api.post<ITravel>(ENDPOINTS.createTravel, travelCreate);
      return response.data;
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);

export const updateTravel = createAsyncThunk(
  'travel/update',
  async (data: any, thunkApi) => {
    try {
      setUserApi(getAuthTokenUser());
      const { id, ...dataTravel } = data;
      const response = await api.put<ITravel>(ENDPOINTS.updateTravel(id), dataTravel);
      return response.data
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);
