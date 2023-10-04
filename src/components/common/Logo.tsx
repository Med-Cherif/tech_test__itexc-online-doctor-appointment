import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to={"/dashboard"}>
      <img className="logo" src={logo} alt="" />
    </Link>
  );
};

export default Logo;
