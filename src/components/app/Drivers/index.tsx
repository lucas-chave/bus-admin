import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchDrivers } from "../../../store/slices/drivers/midleware";

import { DashboardPage } from "../../DashboardPage";
import { ContainerTable } from '../../../styles/Table/styles';
import { formatDate } from "../../../utils/formatData";

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const { drivers } = useAppSelector((state) => state.drivers );

  const navigate = useNavigate();

  const navigateForDetailsDriver = (id: number) => {
    navigate(`/dashboard/motoristas/detalhes/${id}`);
  };

  const thead = [
    'Nome',
    'Documento',
    'Data de nascimento',
    'Celular',
  ];

  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);

  return (
    <DashboardPage title="Motoristas">
      <ContainerTable>
        <Link to={"/dashboard/motoristas/adicionar"}>Adicionar motorista</Link>
        {drivers && (
          <table>
            <thead>
              <tr>
                {thead.map((title) => (
                  <th>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {drivers && drivers.map((driver) => (
                <tr key={driver.id} onClick={() => navigateForDetailsDriver(driver.id as any)}>
                  <td>{driver.full_name}</td>
                  <td>{driver.cpf}</td>
                  <td>{formatDate(driver.birthday)}</td>
                  <td>{driver.cellphone_one}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ContainerTable>
    </DashboardPage>
  );
}
