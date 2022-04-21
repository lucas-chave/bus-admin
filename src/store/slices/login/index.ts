import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '../../../types/auth';
import { login } from './middleware';

const initialState: IAuthState = {
  userToken: '',
  loading: false,
  error: '',
};

const reducers = {
  setTokenUser: (state: IAuthState, action: PayloadAction<string>) => {
    state.userToken = action.payload;
    state.loading = false;
  },
  removeTokenUser: (state: IAuthState) => {
    state.userToken = '';
  },
};

export const auhtSlice = createSlice({
  name: 'login',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => ({
      ...state,
      error: '',
      loading: true,
    }));
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      userToken: action.payload,
    }));
    builder.addCase(login.rejected, (state) => ({
      ...state,
      error: 'Usuário ou senha incorreta',
      loading: false,
    }));
  },
});

export const { setTokenUser, removeTokenUser } = auhtSlice.actions;

export default auhtSlice.reducer;
