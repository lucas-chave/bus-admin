import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: null,
};

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errors = action.payload;
    },
    clearError: (state) => {
      state.errors = null;
    }
  },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
