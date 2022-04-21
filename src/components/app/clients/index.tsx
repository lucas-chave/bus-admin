import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchClients } from "../../../store/slices/clients/middleware";

import { DashboardPage } from "../../dashboardPage";
import { ContainerTable } from '../../../styles/Table/styles';
import { formatDate } from "../../../utils/formatData";

export const Clients = () => {
  const dispatch = useAppDispatch();

  const { clients } = useAppSelector((state) => state.clients);

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
    
    dispatch(fetchClients());
  }, []);

  return (
    <DashboardPage title="Clientes">
      <ContainerTable>
        <Link to={"/dashboard/clientes/adicionar"}>Adicionar cliente</Link>
        {clients && (
          <table>
            <thead>
              <tr>
                {thead.map((title, index) => (
                  <th key={index}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clients && clients.map((client) => (
                <tr key={client.id} onClick={() => navigateForDetailsDriver(client.id)}>
                  <td>{client.full_name}</td>
                  <td>{client.cpf}</td>
                  <td>{formatDate(client.birthday)}</td>
                  <td>{client.cellphone_one}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ContainerTable>
    </DashboardPage>
  )
}