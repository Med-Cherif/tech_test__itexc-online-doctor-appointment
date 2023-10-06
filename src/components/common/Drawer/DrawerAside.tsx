import React from "react";

interface TProps {
  children: React.ReactNode;
  transitionDuration: string;
}

const DrawerAside = ({ children, transitionDuration }: TProps) => {
  return (
    <div
      style={{
        transition: `transform ${transitionDuration}ms`,
      }}
      className="drawer-aside"
    >
      {children}
    </div>
  );
};

export default DrawerAside;
