import React from "react";
import Button, { TButtonProps } from ".";

interface TProps extends TButtonProps {
  icon: React.ReactNode;
}

const ButtonIcon = ({ icon, children, ...rest }: TProps) => {
  return (
    <Button className="button-icon" {...rest}>
      {icon}
      {children}
    </Button>
  );
};

export default ButtonIcon;
