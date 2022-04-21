import { setError } from "../store/slices/errors";

export const handleError = (error: any, thunkAPI: any) => {
  if (error.response) {
    const message = error.response.data.nickname;
    const err = [...message].find((i) => i);

    thunkAPI.dispatch(setError(err));
    return thunkAPI.rejectWithValue(err);
  }
  if (error.request) {
    return thunkAPI.rejectWithValue('Não foi possível conectar-se ao Seu Guru.');
  }
  return thunkAPI.rejectWithValue('Não foi possível obter os dados');
};