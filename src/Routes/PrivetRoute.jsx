import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  if (!user) {
    <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivetRoute;
