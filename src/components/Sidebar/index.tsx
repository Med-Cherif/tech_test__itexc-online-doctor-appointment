// import React from "react";
import links from "../../data/links";
import SidebarLink from "./SidebarLink";
import { useAppContext } from "../../contexts/appContext";
import SidebarMobileScreen from "./SidebarMobileScreen";

const Sidebar = () => {
  const { isSidebarOpen } = useAppContext();
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <SidebarMobileScreen />
      <ul>
        {links.map((link) => {
          return <SidebarLink key={link.id} {...link} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
