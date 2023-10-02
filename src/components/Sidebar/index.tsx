import React from "react";
import links from "../../data/links";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {links.map((link) => {
          return <SidebarLink key={link.id} {...link} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
