import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useAppSelector } from "../../../store/hooks";
import { IDriver } from "../../../types/drivers";
import { DashboardPage } from "../../dashboardPage";

export const Driver = () => {
  const [driver, setDriver] = useState<IDriver>();
  const location = useLocation();

  const { drivers } = useAppSelector((state) => state.drivers);

  useEffect(() => {
    const getIdAndSetDriver = () => {
      const lastPositionArray = location.pathname.split('/').length - 1;
      const response = location.pathname.split('/')[lastPositionArray];
      const dri = drivers.find((driver) => driver.id === Number(response));
      setDriver(dri);
    };
    getIdAndSetDriver();
  }, []);

  return (
    <DashboardPage title="Detalhes motoristas">
      <div>
        {driver?.id}
      </div>
    </DashboardPage>
  );
};