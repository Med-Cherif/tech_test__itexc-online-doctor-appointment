import React from "react";

const MedicalHistoryTitle = ({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={`medical-history-title ${className}`} {...rest}>
      {children}
    </h2>
  );
};

export default MedicalHistoryTitle;
