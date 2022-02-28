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
  let route = children;
  if (!auth.token) {
    route = <Navigate to="/home" />;
  }
  return route;
};

export default ProtectedRoute;
