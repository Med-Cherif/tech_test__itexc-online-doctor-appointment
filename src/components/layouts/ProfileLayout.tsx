import React from "react";
import ProtectedRoute from "../guards/ProtectedRoute";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Container from "../common/Container";

const ProfileLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
      <div className="profile-page-wrapper">
        <Container>
          <Outlet />
        </Container>
      </div>
    </ProtectedRoute>
  );
};

export default ProfileLayout;
