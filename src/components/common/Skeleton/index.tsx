// interface TProps {}

import { HTMLAttributes } from "react";

const Skeleton = ({
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  const classes = `skeleton ${className}`;
  return <div className={classes} {...rest} />;
};

export default Skeleton;
