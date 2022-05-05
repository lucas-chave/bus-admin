import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchTravels } from "../../../store/slices/travels/middleware";
import { ContainerTable } from "../../../styles/Table/styles";
import { DashboardPage } from "../../DashboardPage";

export const Travels = () => {
  const dispatch = useAppDispatch();

  const { travels } = useAppSelector((state) => state.travels);
  console.log(travels);
  
  useEffect(() => {
    dispatch(fetchTravels());
  }, [dispatch]);

  const thead = [
    'Data',
    'Origem',
  ];

  return (
    <DashboardPage title="Viagens">
     <ContainerTable>
        <Link to="/dashboard/viagens/adicionar">Criar viajem</Link>
        {travels && (
          <table>
            <thead>
              {thead.map((title) => (
                <th>
                  {title}
                </th>
              ))}
              <tbody>
                {travels && travels.map((travel) => (
                  <tr key={travel.id}>
                    <td>{travel.date}</td>
                    <td>{travel.status}</td>
                  </tr>
                ))}
              </tbody>
            </thead>
          </table>
        )}
      </ContainerTable>
    </DashboardPage>
  )
};