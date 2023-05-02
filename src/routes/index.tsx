import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import NotePage from '../pages/NotePage/NotePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

interface PrivateRouteProps {
  path: string;
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);

  return (
    <Route path={path} element={isAuthenticated ? element : <Link to="/login" />} />
  );
};

const RoutesComponent: React.FC = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <PrivateRoute path="/" element={<HomePage />} />
    <PrivateRoute path="/notes/:id" element={<NotePage />} />
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutesComponent;
