interface TProps {
  children: React.ReactNode;
}

const AuthActionsWrapper = ({ children }: TProps) => {
  return <div className="auth-actions-wrapper">{children}</div>;
};

export default AuthActionsWrapper;
