import AuthButton from "./AuthButton";

interface TProps {
  text: string;
  icon: React.ReactNode;
}

const AuthSocialButton = ({ text, icon }: TProps) => {
  return (
    <AuthButton variant="light" className="auth-social-button">
      {icon}
      {text}
    </AuthButton>
  );
};

export default AuthSocialButton;
