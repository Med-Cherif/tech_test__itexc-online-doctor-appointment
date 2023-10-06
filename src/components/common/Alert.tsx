import React from "react";

const Alert = ({ children }: { children: React.ReactNode }) => {
  return <div className="alert">{children}</div>;
};

export default Alert;
