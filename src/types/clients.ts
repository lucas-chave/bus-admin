export interface IClient {
  id?: number;
  full_name: string;
  type_document: string;
  document: string;
  birthday: string;
  under_age: any;
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
  cities: Array<ICity>;
  loading: boolean;
  error: string;
};

export interface ICity {
  created_at: string,
  id: number,
  name: number,
  updated_at: number,
};

export interface IClientForm {
  full_name: string;
  type_document: string;
  document?: string;
  document1?: string;
  birthday: string;
  under_age: any;
  status?: boolean;
  cellphone: string;
  street: string;
  district?: string;
  complement?: string;
  city_id: number;
}
