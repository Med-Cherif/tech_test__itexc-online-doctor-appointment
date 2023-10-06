// import React from "react";
import links from "../../data/links";
import SidebarLink from "./SidebarLink";
import { useAppContext } from "../../contexts/appContext";
import SidebarMobileScreen from "./SidebarMobileScreen";
import { FiLogOut } from "react-icons/fi";
import { useLogout } from "../../hooks/useAuth";

const Sidebar = () => {
  const { isSidebarOpen } = useAppContext();
  const { onLogout } = useLogout();
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <SidebarMobileScreen />
      <ul>
        {links.map((link) => {
          return <SidebarLink key={link.id} {...link} />;
        })}
        <SidebarLink
          Icon={FiLogOut}
          // href="/"
          title="Logout"
          onClick={() => {
            onLogout();
          }}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
