import React, { LabelHTMLAttributes } from "react";

// interface TProps

const Label = ({
  children,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="form-label" {...rest}>
      {children}
    </label>
  );
};

export default Label;
