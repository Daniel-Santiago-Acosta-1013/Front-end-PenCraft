import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import NotePage from '../pages/NotePage/NotePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const RoutesComponent: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
      <Route path="/" element={!isAuthenticated ? <Navigate to="/login" /> : <HomePage />} />
      <Route path="/notes/:id" element={!isAuthenticated ? <Navigate to="/login" /> : <NotePage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;