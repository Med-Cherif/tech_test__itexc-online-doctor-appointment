interface TProps {
  description: React.ReactNode;
}

const AuthDescription = ({ description }: TProps) => {
  return <p className="auth-description">{description}</p>;
};

export default AuthDescription;
