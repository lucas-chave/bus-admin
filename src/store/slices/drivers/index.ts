import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDriver, IDriverState } from "../../../types/drivers";

import { fetchDrivers } from "./midleware";

const initialState: IDriverState = {
  drivers: [],
  loading: false,
};

const reducers = {
  setDrivers: (state: IDriverState, action: PayloadAction<IDriver[]>) => {
    state.drivers = action.payload;
    state.loading = false;
  },
};

export const driverSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchDrivers.fulfilled, (state, action: PayloadAction<any>) => ({
       ...state,
       drivers: action.payload,
    }))
  }
});

export const { setDrivers } = driverSlice.actions;

export default driverSlice.reducer;
