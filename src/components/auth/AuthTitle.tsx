interface TProps {
  title: string;
  icon: string;
}

const AuthTitle = ({ title, icon }: TProps) => {
  return (
    <h2 className="auth-title">
      {title}
      <span>
        <img src={icon} alt="" />
      </span>
    </h2>
  );
};

export default AuthTitle;
