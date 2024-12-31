import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!JSON.parse(localStorage.getItem('user')); // Check token in localStorage or cookies

  return isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default PrivateRoute;
