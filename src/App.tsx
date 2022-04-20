import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

import GlobalStyle from './styles/global';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
