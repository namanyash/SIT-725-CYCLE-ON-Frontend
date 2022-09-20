import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const isAuth = true; // This boolean value depends on if there is a token or not (authentication)
  return <>{isAuth ? <Outlet /> : <Navigate to="/" />}</>;
}

export default ProtectedRoutes;
