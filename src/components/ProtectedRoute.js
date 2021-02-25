import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
const ProtectedRoute = ({ children, ...props }) => {
  const { user } = useAuth();
  return (
    <Route
      {...props}
      render={() => (user ? children : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
