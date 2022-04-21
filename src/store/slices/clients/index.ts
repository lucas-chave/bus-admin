import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchClients } from "./middleware";

import { IClient, IClientState } from "../../../types/clients";

const initialState: IClientState = {
  clients: [],
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
  }
});

export const { setClients } = clientSlice.actions;

export default clientSlice.reducer;
