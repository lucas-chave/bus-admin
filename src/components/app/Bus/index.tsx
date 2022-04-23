import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ContainerTable } from "../../../styles/Table/styles";
import { DashboardPage } from "../../dashboardPage";
import { fetchBus } from "../../../store/slices/bus/middleware";

const THEAD = [
  'Modelo',
  'Placa',
  'Banheiro',
  'Prefixo',
];

export const Bus = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { bus } = useAppSelector((state) => state.bus);

  const navigateForDetailsDriver = (id: number) => {
    navigate(`/dashboard/onibus/detalhes/${id}`);
  };

  useEffect(() => {
    dispatch(fetchBus());
  }, []);

  return (
    <DashboardPage title="Ônibus">
      <ContainerTable>
        <Link to={"/dashboard/onibus/adicionar"}>Adicionar ônibus</Link>
        <table>
          <thead>
            <tr>
              {THEAD.map((title) => (
                <th>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
              {bus && bus.map((bus) => (
                <tr key={bus.id} onClick={() => navigateForDetailsDriver(bus.id as any)}>
                  <td>{bus.model_description}</td>
                  <td>{bus.plate}</td>
                  <td>{bus.toilet === true ? 'Sim' : 'Não'}</td>
                  <td>{bus.prefix}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </ContainerTable>
    </DashboardPage>
  );
};