export const setAuthTokenUser = (token: string) => {
  localStorage.setItem('AdminAuthToken', token);
};

export const getAuthTokenUser = () => {
  const token = localStorage.getItem('AdminAuthToken') as any;
  return JSON.parse(token);
};

export const RemoveToken = () => {
  if (typeof window == 'undefined') {
    return false
  }
  localStorage.removeItem('AdminAuthToken');
};
