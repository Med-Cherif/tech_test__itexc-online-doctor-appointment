import { BiMenuAltLeft } from "react-icons/bi";
import SidebarLink from "./SidebarLink";
import Logo from "../common/Logo";
import { useAppContext } from "../../contexts/appContext";
import Avatar from "../common/Avatar";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import CountBadge from "../common/CountBadge";
import { useAppSelector } from "../../hooks/useRedux";

const SidebarMobileScreen = () => {
  const { userData } = useAppSelector((state) => state.user);
  const { closeSidebar } = useAppContext();
  return (
    <div className="sidebar-mobile-content">
      <div className="sidebar-logo">
        <BiMenuAltLeft onClick={closeSidebar} fontSize={28} />
        <Logo />
      </div>
      <div className="sidebar-edit-profile-wrapper">
        <Link to="/profile/edit" className="sidebar-edit-profile-link">
          <Avatar
            src={userData?.profilePicture}
            alt={userData?.name}
            size={32}
          />
          <span>Edit My Profile</span>
        </Link>
      </div>
      <ul className="sidebar-mobile-links">
        <SidebarLink
          title={
            <span className="sidebar-notification-content">
              Notifications
              <CountBadge number={2} />
            </span>
          }
          Icon={IoNotificationsOutline}
          onClick={() => {}}
        />
        <SidebarLink
          title={<>Settings</>}
          Icon={AiOutlineSetting}
          onClick={() => {}}
        />
      </ul>
    </div>
  );
};

export default SidebarMobileScreen;
