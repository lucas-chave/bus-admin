export interface IBus {
  id?: number;
  model_description: string;
  plate: string;
  toilet: any;
  number_of_seats: number;
  year: number;
  prefix: string;
  active?: string;
}

export interface IBusState {
  loading: boolean;
  bus: Array<IBus>;

}
