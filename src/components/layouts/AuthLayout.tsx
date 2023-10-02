import { Outlet } from "react-router-dom";
// import authBg from "../../assets/images/auth-images/auth-bg.png";
// import "../../styles/layouts/auth-layout.scss";

const AuthLayout = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-wrapper">
        <Outlet />
      </div>
      <div className="auth-bg" />
    </div>
  );
};

export default AuthLayout;
