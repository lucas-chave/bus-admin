export interface ITravel {
  bus_id: number;
  driver_id: number;
  origin_id: number;
  destination_id: number;
  date: string;
  status: string;
  id?: string;
}

export interface ITravelState {
  travels: ITravel[],
  loading: boolean,
  error: string,
}
