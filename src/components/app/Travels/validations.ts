import * as yup from 'yup';

export const schema = yup.object().shape({
  bus_id: yup.number().required("Você precisa selecionar um ônibus"),
  driver_id: yup.number().required("Você precisa selecionar um motorista"),
  origin_id: yup.number().required("Você precisa selecionar uma origem"),
  destination_id: yup.number().required("Você precisa selecionar um destino"),
  date: yup.string().required("Você precisa digitar uma data"),
});
