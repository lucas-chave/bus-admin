import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ContainerTable } from "../../../styles/Table/styles";
import { DashboardPage } from "../../DashboardPage";

export const AddTravelOrTravel = () => {
  const { travels } = useAppSelector((state) => state.travels);



  return (
    <DashboardPage title="Viagens">
    </DashboardPage>
  );
};