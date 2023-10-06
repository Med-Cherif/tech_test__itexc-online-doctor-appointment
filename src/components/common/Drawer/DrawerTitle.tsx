const DrawerTitle = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={`drawer-title ${className}`} {...rest}>
      {children}
    </h2>
  );
};

export default DrawerTitle;
