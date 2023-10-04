// import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import Avatar from "../common/Avatar";
import avatar from "../../assets/avatar.png";
import Logo from "../common/Logo";

const Navbar = () => {
  return (
    <header>
      <Logo />
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
