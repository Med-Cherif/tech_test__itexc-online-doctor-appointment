import { ButtonHTMLAttributes } from "react";

type TButtonVariant = "primary" | "light" | "gray" | "simple";

export interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: TButtonVariant;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  fullWidth,
  isLoading,
  ...rest
}: TButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className={`btn btn-${variant} btn-rounded ${
        fullWidth ? "full-width" : ""
      } ${className}
        
        `}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
