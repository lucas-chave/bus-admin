import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/login';
import driversReducer from './slices/drivers';
import errorReducer from './slices/errors';

const reducer = {
  auth: authReducer,
  drivers: driversReducer,
  error: errorReducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
