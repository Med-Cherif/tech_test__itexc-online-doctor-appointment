import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconType } from "react-icons";

interface TProps {
  Icon: IconType;
  href: string;
  title: string;
}

const SidebarLink = ({ title, href, Icon }: TProps) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        to={href}
        className={`sidebar-link ${pathname === href ? "active" : ""}`}
      >
        <Icon size={24} />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarLink;
