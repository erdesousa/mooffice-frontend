import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Login from "./pages/Login/Login"
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminUsers from './pages/Dashboard/AdminUsers';
import Limite from './pages/Dashboard/Limites';
import DashboardHome from './pages/Dashboard/DashboardHome';
import Leituras from './pages/Dashboard/Leituras';
import Medidores from './pages/Dashboard/Medidores';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="limite" element={<Limite />} />
          <Route path="leituras" element={<Leituras />} />
          <Route path="medidores" element={<Medidores />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
