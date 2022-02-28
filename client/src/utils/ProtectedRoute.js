import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((states) => states.auth);
  if (auth.token === null) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
