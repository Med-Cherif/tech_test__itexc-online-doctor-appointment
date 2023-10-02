import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../guards/ProtectedRoute";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
      <div className="app-layout-wrapper">
        <Sidebar />
        <div className="app-layout-content">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AppLayout;
