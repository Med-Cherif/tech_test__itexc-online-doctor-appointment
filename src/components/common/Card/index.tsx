import React from "react";

// interface TProps {
//   children: React.ReactNode;
// }

const Card = ({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`card ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
