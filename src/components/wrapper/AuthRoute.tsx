import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PageLoading from "../loading/PageLoading";
// import { getToken } from "@/utils/token";

export default function AuthUserRoute({ allowedRoles = [] }) {
  // hooks
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  console.log(allowedRoles)

  // Check if user is authenticated
  useEffect(() => {
    // Simulate an API call to check authentication
    setInterval(() => {
      // This is just a placeholder for actual authentication logic
      // In a real application, you would check the token validity here
      // const token = getToken();
      // if (token) {
      //   setAuthorized(true);
      // } else {
      //   setAuthorized(false);
      // }
      setAuthorized(true); // Simulating successful authentication
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)return <PageLoading />;
  return authorized ? <Outlet /> : <Navigate to="/login" replace />;
}
