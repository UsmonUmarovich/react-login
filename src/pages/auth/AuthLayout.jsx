import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const AuthLayout = ({ loggedin, setLoggedin }) => {
  const location = useLocation();
  return loggedin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} state={{ from: location }} />
  );
};
