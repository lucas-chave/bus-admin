import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Drivers from './pages/drivers/index';
import AddDriverOrDriver from './pages/drivers/AddDriverOrDriver';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/motoristas" element={<Drivers />} />
        <Route path="/dashboard/motoristas/adicionar" element={<AddDriverOrDriver />} />
        <Route path="/dashboard/motoristas/detalhes/:id" element={<AddDriverOrDriver />} />
      </Routes>
    </Router>
  );
};

export default App;
