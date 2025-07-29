import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRole }) {
  const role = localStorage.getItem('role');
  return role === allowedRole ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
