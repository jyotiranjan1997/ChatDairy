import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { authToken } = useSelector((store) => store.authLogin);

  if (authToken) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}
