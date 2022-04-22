export const ENDPOINTS = {
  login: '/login',
  createUser: '/users',
  showDrivers: '/drivers/list',
  createDriver: '/drivers',
  updateDriver: (id: number) => `/drivers?id=${id}`,
  createClient: '/clients',
  showClients: '/clients/list',
  updateClient: (id: number) => `/drivers?id=&${id}`,
  showCities: '/clients/cities',
};
