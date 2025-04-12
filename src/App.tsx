import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import OrganizationList from './pages/OrganizationList';
import RoleNewEdit from './pages/RoleNewEdit';
import PositionNewEdit from './pages/PositionNewEdit';
import RolesList from './pages/RolesList';
import PositionsList from './pages/PositionsList';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/organization-list" element={<OrganizationList />} />
        <Route path="/roles" element={<RolesList />} />
        <Route path="/role/new" element={<RoleNewEdit />} />
        <Route path="/role/:id" element={<RoleNewEdit />} />
        <Route path="/positions" element={<PositionsList />} />
        <Route path="/position/new" element={<PositionNewEdit />} />
        <Route path="/position/:id" element={<PositionNewEdit />} />
      </Routes>
    </div>
  );
};

export default App;