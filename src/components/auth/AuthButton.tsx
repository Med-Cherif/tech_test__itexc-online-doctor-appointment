import React from "react";
import Button, { TButtonProps } from "../common/Button";

// interface TProps {
//   children: React.ReactNode;
// }

const AuthButton = ({ children, ...rest }: TButtonProps) => {
  return (
    <Button fullWidth {...rest}>
      {children}
    </Button>
  );
};

export default AuthButton;
