import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...body }) => {
  const navigate = useNavigate();
  const auth = useSelector((states) => states.auth);
  if (!auth.token) {
    <Navigate to="/" />;
  }
  return <Route {...body} element={<Component />} />;
};

export default ProtectedRoute;
