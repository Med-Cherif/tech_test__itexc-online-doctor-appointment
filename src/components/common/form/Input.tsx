import { InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...rest }, ref) => {
  return <input ref={ref} className={`form-control ${className}`} {...rest} />;
});

export default Input;
