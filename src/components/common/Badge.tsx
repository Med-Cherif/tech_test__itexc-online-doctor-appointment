type TVariant = "error" | "success" | "warning";

interface TProps {
  variant?: TVariant;
  children: React.ReactNode;
}

const Badge = ({ children, variant = "success" }: TProps) => {
  return <div className={`badge badge-${variant}`}>{children}</div>;
};

export default Badge;
