import { Navigate, Outlet } from "react-router-dom";

export default function AuthUserRoute() {
const isAuthenticated = localStorage.getItem("authToken");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
