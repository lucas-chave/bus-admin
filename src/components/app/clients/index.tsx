import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchClients } from "../../../store/slices/clients/middleware";
import { ContainerTable } from '../../../styles/Table/styles';
import { formatDate } from "../../../utils/formatData";

import { DashboardPage } from "../../dashboardPage";

export const Clients = () => {
  const dispatch = useAppDispatch();

  const { clients } = useAppSelector((state) => state.clients);

  const navigate = useNavigate();

  const navigateForDetailsClient = (id: number) => {
    navigate(`/dashboard/clientes/detalhes/${id}`);
  };

  const thead = [
    'Nome',
    'tipo',
    'Documento',
    'Data de nascimento',
    'Celular',
  ];

  useEffect(() => {
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
                <tr key={client.id} onClick={() => navigateForDetailsClient(client.id as any)}>
                  <td>{client.full_name}</td>
                  <td>{client.type_document.toLocaleUpperCase()}</td>
                  <td>{client.document}</td>
                  <td>{formatDate(client.birthday)}</td>
                  <td>{(client.cellphone)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ContainerTable>
    </DashboardPage>
  )
}