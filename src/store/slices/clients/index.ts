import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCitiesClient, fetchClients } from "./middleware";

import { IClient, IClientState } from "../../../types/clients";

const initialState: IClientState = {
  clients: [],
  cities: [],
  loading: false,
  error: "",
};

const reducers = {
  setClients: (state: IClientState, action: PayloadAction<IClient[]>) => {
    state.clients = action.payload;
    state.loading = false;
  },
};

export const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchClients.fulfilled, (state, action: PayloadAction<any>) => ({
       ...state,
       clients: action.payload,
       error: "",
    }));
    builder.addCase(fetchClients.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      clients: null as any,
      error: action.payload
    }));
    builder.addCase(fetchCitiesClient.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      cities: action.payload,
      error: "",
    }));
    builder.addCase(fetchCitiesClient.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      cities: null as any,
      error: action.payload
    }));
  },
});

export const { setClients } = clientSlice.actions;

export default clientSlice.reducer;
