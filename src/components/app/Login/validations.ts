import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup.string().required('Preencha com um usuário válido'),
  password: yup.string().min(6, 'O usuário deve ter no mínimo 6 digitos'),
});
