import React from "react";
import { Link } from "react-router-dom";

interface TProps {
  text: string;
  linkText: string;
  href?: string;
  onClick?: () => void;
}

const AuthHelperText = ({ text, href, linkText, onClick }: TProps) => {
  return (
    <p className="auth-helper-text">
      {text}{" "}
      <Link
        to={href || "#"}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {linkText}
      </Link>
    </p>
  );
};

export default AuthHelperText;
