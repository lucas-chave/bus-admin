import * as yup from 'yup';
import CPF from "cpf";

export const schema = yup.object().shape({
  full_name: yup
  .string()
  .required("Você precisa digitar seu nome.")
  .min(5, "Seu nome precisa ter no mínimo 5 caracteres.")
  .max(40, "Seu nome pode ter no máximo 40 caracteres.")
  .matches(
    /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
    "O nome deve conter apenas letras."
  )
  .matches(/^[\S]+(\s[\S]+)+\s*$/gms, "Digite seu nome completo."),
  cpf: yup
    .string()
    .required("Você precisa digitar o CPF.")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF deve ter formato 000.000.000-00")
    .test("is-valid-cpf", "O CPF precisa ser válido.", (cpf: any) => CPF.isValid(cpf)),
  birthday: yup.string().required("Você precisa digitar a data do seu nascimento."),
  nickname: yup.string().required("Você precisa digitar um apelido."),
  license: yup.string().required("Você precisa digitar a data do seu nascimento."),
  license_expiration_date: yup.string().required("Você precisa digiar o número da habilitação"),
  cellphone_one: yup.string().min(15, "Preencha um valor válido").required("Você precisa digitar um telefone"),
});
