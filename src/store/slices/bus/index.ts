import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchBus } from "./middleware";

import { IBus, IBusState } from "../../../types/bus";

const initialState: IBusState = {
  bus: [],
  loading: false,
};

const reducers = {
  setBus: (state: IBusState, action: PayloadAction<IBus[]>) => {
    state.bus = action.payload;
    state.loading = false;
  },
};

export const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchBus.fulfilled, (state, action: PayloadAction<any>) => ({
       ...state,
       bus: action.payload,
       error: "",
    }));
    builder.addCase(fetchBus.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      bus: null as any,
      error: action.payload
    }));
  },
});

export const { setBus } = busSlice.actions;

export default busSlice.reducer;
