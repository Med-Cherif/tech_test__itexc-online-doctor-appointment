import PageLoader from "./PageLoader";

interface TProps {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingComponent?: React.ReactNode;
}

const LoaderWrapper = ({
  children,
  isLoading,
  loadingComponent = <PageLoader />,
}: TProps) => {
  return isLoading ? <>{loadingComponent}</> : <>{children}</>;
};

export default LoaderWrapper;
