import React from "react";
import { getUserAccessToken } from "@/services/token.service";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const accessToken = getUserAccessToken()?.token;
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
