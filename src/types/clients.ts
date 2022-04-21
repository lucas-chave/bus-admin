export interface IClient {
  id?: number;
  full_name: string;
  cpf: string;
  birthday: string;
  license: string;
  license_expiration_date: string;
  created_at?: string;
  updated_at?: string;
  status: string;
  nickname: string;
  cellphone_one: string;
  cellphone_two?: string;
}

export interface IClientState {
  clients: Array<IClient>;
  loading: boolean;
  error: string;
};