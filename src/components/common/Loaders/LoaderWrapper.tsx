interface TProps {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingComponent?: React.ReactNode;
}

const LoaderWrapper = ({
  children,
  isLoading,
  loadingComponent = <h2>Loading...</h2>,
}: TProps) => {
  return isLoading ? <>{loadingComponent}</> : <>{children}</>;
};

export default LoaderWrapper;
