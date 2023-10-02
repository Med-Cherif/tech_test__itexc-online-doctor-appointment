const CardBody = ({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`card-body ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
