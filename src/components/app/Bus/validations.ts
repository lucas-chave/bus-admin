import * as yup from 'yup';

export const schema = yup.object().shape({
  model_description: yup.string().required("Você precisa digitar um modelo"),
  plate: yup.string().required("Você precisa digitar a placa do veículo"),
  toilet: yup.boolean().required("Você precisa selecionar o banheiro"),
  year: yup.number().required("Você precisa o ano do veículo"),
  prefix: yup.string().required("Você precisa digitar o prefixo do veículo"),
  number_of_seats: yup.number().required("Você digitar o número de assentos do veículo"),
});
