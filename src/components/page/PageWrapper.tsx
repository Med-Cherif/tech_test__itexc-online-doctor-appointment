interface TProps {
  title?: string;
  children: React.ReactNode;
}

const PageWrapper = ({ children }: TProps) => {
  return <>{children}</>;
};

export default PageWrapper;
