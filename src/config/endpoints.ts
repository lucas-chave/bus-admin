export const ENDPOINTS = {
  login: '/login',
  createUser: '/users',
  showDrivers: '/drivers/list',
  createDriver: '/drivers',
  updateDriver: (id: number) => `/drivers?id=${id}`,
  createClient: '/clients',
  showClients: '/clients/list',
  updateClient: (id: number) => `/clients?id=${id}`,
  showCities: '/clients/cities',
  createBus: '/bus',
  showBus: '/bus/list',
  updateBus: (id: number) => `/bus?id=${id}`,
};
