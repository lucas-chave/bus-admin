export interface IClient {
  id?: number;
  full_name: string;
  type_document: string;
  document: string;
  birthday: string;
  under_age: string;
  created_at?: string;
  updated_at?: string;
  status: boolean;
  cellphone: string;
  address: IAdress;
}

export interface IAdress {
  id: number;
  street: string;
  district: string;
  complement: string;
  city_id: number;
  client_id: number;
  created_at?: string;
  updated_at?: string;
}

export interface IClientState {
  clients: Array<IClient>;
  loading: boolean;
  error: string;
};