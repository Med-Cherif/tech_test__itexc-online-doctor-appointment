import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import Avatar from "../common/Avatar";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
  return (
    <header>
      <Link to={"/dashboard"}>
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="header-right-side">
        <div className="header-icons-wrapper">
          <IoNotificationsOutline />
          <AiOutlineSetting />
        </div>
        <div>
          <Link to="/profile">
            <Avatar src={avatar} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
