export interface IDriverState {
  drivers: Array<IDriver>;
  loading: boolean;
  error: string
};

export interface IDriver {
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
  cellphone_one?: string;
  cellphone_two?: string;
}
