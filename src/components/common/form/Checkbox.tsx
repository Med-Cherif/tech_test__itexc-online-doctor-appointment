import { forwardRef, InputHTMLAttributes, useMemo } from "react";
import Input from "./Input";

interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: React.ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, TProps>(
  ({ text, ...props }, ref) => {
    const id = useMemo(() => {
      return Math.random().toString(16);
    }, []);
    return (
      <div className="checkbox-wrapper">
        <Input id={id} ref={ref} type="checkbox" {...props} />
        {text && (
          <label htmlFor={id} className="checkbox-text">
            {text}
          </label>
        )}
      </div>
    );
  }
);

export default Checkbox;
