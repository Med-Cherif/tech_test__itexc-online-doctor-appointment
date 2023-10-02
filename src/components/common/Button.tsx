import { ButtonHTMLAttributes } from "react";

type TButtonVariant = "primary" | "light";

export interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: TButtonVariant;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  fullWidth,
  ...rest
}: TButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} btn-rounded ${
        fullWidth ? "full-width" : ""
      } ${className}
        
        `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
