import { useEffect } from "react";

interface TProps {
  title?: string;
  children: React.ReactNode;
}

const PageWrapper = ({ children, title }: TProps) => {
  useEffect(() => {
    const prefix = "Doctor App";
    document.title = title ? `${title} | ${prefix}` : prefix;
    // if (title) {
    // }
  }, [title]);

  return <>{children}</>;
};

export default PageWrapper;
