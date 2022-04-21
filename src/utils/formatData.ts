export const formatDate = (data: string) => {
  const res = data.split('-');
  const day = res[2];
  const month = res[1];
  const  year = res[0];
  return `${day}/${month}/${year}`;
};
