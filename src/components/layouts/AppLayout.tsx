import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../guards/ProtectedRoute";

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
};

export default AppLayout;
