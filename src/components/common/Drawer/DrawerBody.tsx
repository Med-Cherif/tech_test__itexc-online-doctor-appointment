import React from "react";

const DrawerBody = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`drawer-body ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default DrawerBody;
