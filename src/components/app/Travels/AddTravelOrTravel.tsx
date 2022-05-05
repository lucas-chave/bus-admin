import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ITravel } from "../../../types/travel";
import { dateMask } from "../../../utils/masks";
import { transformValueForSelect } from "../../../utils/transformValueForSelect";
import { DashboardPage } from "../../DashboardPage";
import { Field } from "../../Field";
import Select from "../../Select";
import { schema } from "./validations";
import { setError } from "../../../store/slices/errors";
import { createTravel, fetchTravels, updateTravel } from "../../../store/slices/travels/middleware";
import { Container, Grid } from "./styles";
import { Button } from "../../Button";
import { useEffect } from "react";
import { fetchBus } from "../../../store/slices/bus/middleware";
import { fetchCitiesClient } from "../../../store/slices/clients/middleware";
import { fetchDrivers } from "../../../store/slices/drivers/midleware";
import { formatDate } from "../../../utils/formatData";

export const AddTravelOrTravel = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { travels } = useAppSelector((state) => state.travels);
  const { bus } = useAppSelector((state) => state.bus);
  const { drivers } = useAppSelector((state) => state.drivers);
  const { cities } = useAppSelector((state) => state.clients);

  useEffect(() => {
    dispatch(fetchTravels());
    dispatch(fetchBus());
    dispatch(fetchCitiesClient());
    dispatch(fetchDrivers());
  }, []);

  const sizeArrPathname = location.pathname.split("/").length - 1;
  const travel = travels.find((travel) => travel.id as any === Number(location.pathname.split("/")[sizeArrPathname]));
  const lastPathname = location.pathname.split("/")[sizeArrPathname];

  const defaultValues = {
    bus_id: travel?.bus_id || 0,
    driver_id: travel?.driver_id || 0,
    destination_id: travel?.destination_id || 0,
    date: formatDate(travel?.date || "") || "",
  };

  const form = useForm<ITravel>({
    resolver: yupResolver(schema),
    defaultValues
  });

  console.log(form.watch("bus_id"));
  console.log(form.watch("date"));
  console.log(form.watch("destination_id"));
  console.log(form.watch("driver_id"));
  console.log(form.watch("origin_id"));

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (data: ITravel) => {
    console.log('asdftra');
    
    try {
      const response: any = lastPathname === 'adicionar' ? await dispatch(createTravel(data)) : await dispatch(updateTravel({ ...data, id: lastPathname}));

      if ((response.payload as any)) {
        navigate('/dashboard/viagens');
      }
    } catch (error) {
      dispatch(setError('Ocorreu algum erro, por favor tente novamente!'));
      console.log(error);
    }
  };

  return (
    <DashboardPage title="Viagens">
      <FormProvider {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Container>
            <Grid>

            <Controller
              name="bus_id"
              control={form.control}
              render={({field}) => (
                <Select 
                  label="Ônibus"
                  options={transformValueForSelect(bus, 'bus')}
                  error={errors.bus_id?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="driver_id"
              control={form.control}
              render={({field}) => (
                <Select 
                  label="Motorista"
                  options={transformValueForSelect(drivers)}
                  error={errors.driver_id?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="origin_id"
              control={form.control}
              render={({field}) => (
                <Select 
                  label="Origem"
                  options={transformValueForSelect(cities)}
                  error={errors.origin_id?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="destination_id"
              control={form.control}
              render={({field}) => (
                <Select 
                  label="Destino"
                  options={transformValueForSelect(cities)}
                  error={errors.destination_id?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="date"
                control={form.control}
                render={({ field }) => (
                <Field
                  label="Data da viajem"
                  placeholder="00/00/0000"
                  error={errors.date?.message}
                  {...field}
                  {...dateMask}
                />
              )}
            />
            </Grid>
            <Button
              title={lastPathname === 'adicionar' ? "Salvar viajem" : "Atualizar viajem"}
            />
          </Container>
        </form>
      </FormProvider>
    </DashboardPage>
  );
};
