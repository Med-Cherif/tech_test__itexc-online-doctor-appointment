interface TProps {
  children: React.ReactNode;
}

const Container = ({ children }: TProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
