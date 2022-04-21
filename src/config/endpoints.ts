export const ENDPOINTS = {
  login: '/login',
  showDrivers: '/drivers/list',
  createDriver: '/drivers',
  updateDriver: (id: string) => `/drivers?id=${id}`,
  showClients: '/clients/list',
  createUser: '/users',
  updateClient: (id: string) => `/drivers?id=&${id}`,
};
