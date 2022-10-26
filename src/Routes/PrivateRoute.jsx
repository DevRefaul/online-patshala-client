import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingComponent from "../Components/LoadingComponent/LoadingComponent";
import { AuthContext } from "../Contexts/Auth/AuthContexts";

const PrivateRoute = ({ children }) => {
  const authInfo = useContext(AuthContext);

  const location = useLocation();

  const { user, loading } = authInfo;
  if (loading) {
    return <LoadingComponent />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
