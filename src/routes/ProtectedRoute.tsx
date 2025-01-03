import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authState } = useAuth();

  if (!authState.isAuthenticated) {
    console.log("ProtectedRoute - Not authenticated, redirecting to login");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
