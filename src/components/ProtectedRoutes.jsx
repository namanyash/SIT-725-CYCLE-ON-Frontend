import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AUTH_REDUCER, LANDING_ROUTE } from "../../utils";

function ProtectedRoutes() {
  const isAuth = useSelector((state) => state[AUTH_REDUCER]); // To get auth state from redux store and handle protected routes
  return <>{isAuth ? <Outlet /> : <Navigate to={LANDING_ROUTE} />}</>;
}

export default ProtectedRoutes;
