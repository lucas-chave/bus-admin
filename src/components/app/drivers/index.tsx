import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchDrivers } from "../../../store/slices/drivers/midleware";

import { DashboardPage } from "../../dashboardPage";
import { ContainerTable } from '../../../styles/Table/styles';
import { formatDate } from "../../../utils/formatData";

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const { drivers } = useAppSelector((state) => state.drivers );

  const navigate = useNavigate();

  const navigateForDetailsDriver = (id: any) => {
    navigate(`/dashboard/motoristas/detalhes/${String(id)}`);
  };

  const thead = [
    'Nome',
    'Documento',
    'Data de nascimento',
    'Celular',
  ];

  useEffect(() => {
    console.log('as');
    
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
                <>
                  <tr onClick={() => navigateForDetailsDriver(driver.id)}>
                    <td>{driver.full_name}</td>
                    <td>{driver.cpf}</td>
                    <td>{formatDate(driver.birthday)}</td>
                    <td>{driver.cellphone_one}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        )}
      </ContainerTable>
    </DashboardPage>
  )
}