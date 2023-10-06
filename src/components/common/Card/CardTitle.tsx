import { HTMLAttributes } from "react";

// interface TProps extends HTMLAttributes<HTMLHeadingElement> {
//     text: string
// }

const CardTitle = ({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={`card-title ${className}`} {...rest}>
      {children}
    </h2>
  );
};

export default CardTitle;
