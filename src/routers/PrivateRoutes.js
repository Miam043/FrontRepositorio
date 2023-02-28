import React from "react";
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoutes = () => {
  const token = localStorage.getItem('token')
  return token ? <Outlet />: <Navigate to="/user" />
}

export default PrivateRoutes;
