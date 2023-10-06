// import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import Avatar from "../common/Avatar";
// import avatar from "../../assets/avatar.png";
import Logo from "../common/Logo";
import { useAppSelector } from "../../hooks/useRedux";

const Navbar = () => {
  const { userData } = useAppSelector((state) => state.user);
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
            <Avatar src={userData?.profilePicture} alt={userData?.name} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
