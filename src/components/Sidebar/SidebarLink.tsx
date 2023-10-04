import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconType } from "react-icons";

interface TProps {
  Icon: IconType;
  href?: string;
  onClick?: () => void;
  title: React.ReactNode;
}

const SidebarLink = ({ title, href, onClick, Icon }: TProps) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        to={href!}
        className={`sidebar-link ${pathname === href ? "active" : ""}`}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <Icon size={24} />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarLink;
