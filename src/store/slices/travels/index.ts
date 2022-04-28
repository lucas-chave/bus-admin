import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITravel, ITravelState } from "../../../types/travel";

import { fetchTravels } from "./middleware";

const initialState: ITravelState = {
  travels: [],
  loading: false,
  error: "",
};

const reducers = {
  setDrivers: (state: ITravelState, action: PayloadAction<ITravel[]>) => {
    state.travels = action.payload;
    state.loading = false;
  },
};

export const travelSlice = createSlice({
  name: 'travels',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchTravels.fulfilled, (state, action: PayloadAction<any>) => ({
       ...state,
       travels: action.payload,
       error: "",
    }));
    builder.addCase(fetchTravels.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      travels: null as any,
      error: action.payload,
   }));
  }
});

export const { setDrivers } = travelSlice.actions;

export default travelSlice.reducer;
