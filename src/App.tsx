import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import OrganizationList from './pages/OrganizationList';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/organization-list" element={<OrganizationList />} />
      <Route path="/" element={<Navigate to="/organization-list" replace />} />
    </Routes>
  );
};

export default App;