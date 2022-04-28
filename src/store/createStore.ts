import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/login';
import driversReducer from './slices/drivers';
import clientsReducer from './slices/clients';
import busReducer from './slices/bus';
import travelsReducer from './slices/travels';
import errorReducer from './slices/errors';

const reducer = {
  auth: authReducer,
  drivers: driversReducer,
  clients: clientsReducer,
  error: errorReducer,
  bus: busReducer,
  travels: travelsReducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
