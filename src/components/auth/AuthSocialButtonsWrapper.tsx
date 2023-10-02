interface TProps {
  children: React.ReactNode;
}

const AuthSocialButtonsWrapper = ({ children }: TProps) => {
  return <div className="auth-social-buttons-wrapper">{children}</div>;
};

export default AuthSocialButtonsWrapper;
