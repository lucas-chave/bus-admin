export interface IBus {
  id?: number;
  model: string;
  plate: string;
  bathroom: boolean;
}

export interface IBusState {
  loading: boolean;
  bus: Array<IBus>;
  
}
