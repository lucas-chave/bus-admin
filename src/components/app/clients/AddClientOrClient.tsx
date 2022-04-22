import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createClient, fetchCitiesClient, fetchClients, updateClient } from "../../../store/slices/clients/middleware";
import { setError } from "../../../store/slices/errors";
import { IClient, IClientForm } from "../../../types/clients";
import { formatDate } from "../../../utils/formatData";
import { DashboardPage } from "../../dashboardPage";
import { Field } from "../../Field";
import { dateMask } from "../../../utils/masks";
import { Container, Grid } from "./styles";
import { schema } from "./validations";
import Select from "../../Select";
import { transformValueForSelect } from "../../../utils/transformValueForSelect";
import { Button } from "../../Button";

const DATA_TYPE_DOCUMENT = [
  { label: 'RG', value: 'rg' },
  { label: 'CPF', value: 'cpf' },
];

const DATA_UNDER_AGE = [
  { label: 'Sim', value: 1 },
  { label: 'Não', value: 0 },
];

export const AddClientOrClient = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { clients, cities } = useAppSelector((state) => state.clients);
  const sizeArrPathname = location.pathname.split("/").length - 1;
  const client = clients.find((client) => client.id === Number(location.pathname.split("/")[sizeArrPathname]));
  const lastPathname = location.pathname.split("/")[sizeArrPathname];

  const defaultValues = {
    // full_name: client?.full_name || "",
    // document: client?.document || "",
    // birthday: client?.birthday ? formatDate(client?.birthday || '') : "",
    // cellphone: client?.cellphone || "",
  };

  const form = useForm<IClientForm>({
    resolver: yupResolver(schema),
    // defaultValues
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (data: any) => {
    try {
      const response: any = lastPathname === 'adicionar' ? await dispatch(createClient(data)) : await dispatch(updateClient({ ...data, id: lastPathname}));
      if ((response.payload as any)) {
        navigate('/dashboard/clientes');
      }
    } catch (error) {
      dispatch(setError('Ocorreu algum erro, por favor tente novamente!'));
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchClients());
    dispatch(fetchCitiesClient());
    console.log(cities);
  }, []);

  return (
    <DashboardPage title="Adicionar cliente">
      <FormProvider {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Container>
            <Grid>
              <Controller
                name="full_name"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Nome completo"
                    placeholder="Seu nome"
                    error={errors.full_name?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="document"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Documento"
                    placeholder="documento"
                    mask="000.000.000-00"
                    error={errors.document?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="cellphone"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Celular"
                    placeholder="celular"
                    mask="(00) 00000-0000"
                    error={errors.cellphone?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="birthday"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Data de nascimento"
                    placeholder="Seu nome"
                    error={errors.birthday?.message}
                    {...field}
                    {...dateMask}
                  />
                )}
              />
              <Controller
                name="city_id"
                control={form.control}
                render={({ field }) => (
                  <Select
                    label="Cidade"
                    options={transformValueForSelect(cities)}
                    error={errors.city_id?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="type_document"
                control={form.control}
                render={({ field }) => (
                  <Select
                    label="Tipo do documento"
                    options={DATA_TYPE_DOCUMENT}
                    error={errors.type_document?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="under_age"
                control={form.control}
                render={({ field }) => (
                  <Select
                    label="Menor de idade"
                    options={DATA_UNDER_AGE}
                    error={errors.under_age?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="district"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Bairro"
                    placeholder="bairro"
                    error={errors.district?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="street"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Logradouro"
                    placeholder="rua"
                    error={errors.street?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="complement"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Complemento"
                    placeholder="complemento"
                    error={errors.complement?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Button
              title={lastPathname === 'adicionar' ? "Salvar cliente" : "Atualizar cliente"}
            />
          </Container>
        </form>
      </FormProvider>
    </DashboardPage>
  );
};
