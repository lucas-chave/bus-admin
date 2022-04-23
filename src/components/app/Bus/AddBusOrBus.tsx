import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setError } from "../../../store/slices/errors";
import { DashboardPage } from "../../DashboardPage";
import { Field } from "../../Field";
import { Container, Grid } from "./styles";
import { schema } from "./validations";
import Select from "../../Select";
import { transformValueForSelect } from "../../../utils/transformValueForSelect";
import { Button } from "../../Button";
import { createBus, fetchBus, updateBus } from "../../../store/slices/bus/middleware";
import { IBus } from "../../../types/bus";

const DATA_BATHROOM: any = [
  { label: 'Não', value: false },
  { label: 'Sim', value: true },
];

export const AddBusOrBus = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { bus: busArray } = useAppSelector((state) => state.bus);
  const sizeArrPathname = location.pathname.split("/").length - 1;
  const bus = busArray?.find((bus) => bus.id === Number(location.pathname.split("/")[sizeArrPathname]));
  const lastPathname = location.pathname.split("/")[sizeArrPathname];

  const defaultValues: IBus = {
    model_description: bus?.model_description || "",
    plate : bus?.plate || "",
    toilet: bus?.toilet || false,
    prefix: bus?.prefix || "",
    year: bus?.year || Number(),
    number_of_seats: bus?.number_of_seats || Number(),
  };

  const form = useForm<IBus>({
    resolver: yupResolver(schema),
    defaultValues
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (data: any) => {
    try {
      const response = lastPathname === 'adicionar' ? await dispatch(createBus(data)) : await dispatch(updateBus({ ...data, id: lastPathname}));
      if ((response?.payload as any)) {
        navigate('/dashboard/onibus');
      }
    } catch (error) {
      dispatch(setError('Ocorreu algum erro, por favor tente novamente!'));
    }
  };

  useEffect(() => {
    dispatch(fetchBus());
  }, [dispatch]);

  return (
    <DashboardPage title="Adicionar ônibus">
      <FormProvider {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Container>
            <Grid>
              <Controller
                name="plate"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Placa"
                    placeholder="placa"
                    error={errors.plate?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="model_description"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Modelo"
                    placeholder="modelo"
                    error={errors.model_description?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="number_of_seats"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Número de assentos"
                    placeholder="assentos"
                    error={errors.number_of_seats?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="year"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Ano do veículo"
                    placeholder="ano"
                    error={errors.year?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="prefix"
                control={form.control}
                render={({field}) => (
                  <Field
                    label="Prefixo"
                    placeholder="prefixo"
                    error={errors.prefix?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="toilet"
                control={form.control}
                render={({ field }) => (
                  <Select
                    label="Banheiro"
                    options={DATA_BATHROOM}
                    error={errors.toilet?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Button
              title={lastPathname === 'adicionar' ? "Salvar ônibus" : "Atualizar ônibus"}
            />
          </Container>
        </form>
      </FormProvider>
    </DashboardPage>
  );
};
