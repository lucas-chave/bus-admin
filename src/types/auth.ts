export interface ILogin {
  username: string;
  password: string;
}

export interface IAuthState {
  userToken: string;
  loading: boolean;
  error: string;
}

export interface IUser {
  created_at: string;
  email: string;
  id: number;
  password_digest?: string;
  updated_at: string;
  username: string;
}

export interface IResponseLogin {
  token: string;
  user: IUser
}
