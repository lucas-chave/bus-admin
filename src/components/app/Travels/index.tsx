import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchTravels } from "../../../store/slices/travels/middleware";
import { Button } from "../../Button";
import { DashboardPage } from "../../DashboardPage";

export const Travels = () => {
  const dispatch = useAppDispatch();

  const { travels } = useAppSelector((state) => state.travels);
  console.log(travels);
  
  useEffect(() => {
    dispatch(fetchTravels());
  }, [dispatch]);

  return (
    <DashboardPage title="Viagens">
      <Button title="Criar Viajem"/>
      <div>ola mundo</div>
    </DashboardPage>
  )
};