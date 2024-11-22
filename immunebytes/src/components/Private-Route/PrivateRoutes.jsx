import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('accessToken'); // Check token in localStorage or cookies

  return isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default PrivateRoute;
