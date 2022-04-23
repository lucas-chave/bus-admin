import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Drivers from './pages/drivers/index';
import AddDriverOrDriver from './pages/drivers/AddDriverOrDriver';
import Clients from './pages/clients';
import AddClientOrClient from './pages/clients/AddClientOrClient';

import GlobalStyle from './styles/global';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { clearError } from './store/slices/errors';

const App = () => {
  const { errors } = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errors) {
      toast.error(errors);
      dispatch(clearError());
    }
  }, [errors]);

  return (
    <Router>
      <Toaster position='top-right' />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/clientes" element={<Clients />} />
        <Route path="/dashboard/motoristas" element={<Drivers />} />
        <Route path="/dashboard/clientes/adicionar" element={<AddClientOrClient />} />
        <Route path="/dashboard/motoristas/adicionar" element={<AddDriverOrDriver />} />
        <Route path="/dashboard/clientes/detalhes/:id" element={<AddClientOrClient />} />
        <Route path="/dashboard/motoristas/detalhes/:id" element={<AddDriverOrDriver />} />
      </Routes>
    </Router>
  );
};

export default App;
