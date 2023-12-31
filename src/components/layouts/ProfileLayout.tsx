import React from "react";
import ProtectedRoute from "../guards/ProtectedRoute";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Container from "../common/Container";
import Sidebar from "../Sidebar";

const ProfileLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
      <div className="profile-layout-sidebar">
        <Sidebar />
      </div>
      <div className="profile-page-wrapper">
        <Container>
          <Outlet />
        </Container>
      </div>
    </ProtectedRoute>
  );
};

export default ProfileLayout;
