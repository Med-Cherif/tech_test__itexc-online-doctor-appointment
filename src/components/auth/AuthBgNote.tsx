interface TProps {
  src: string;
  order: number;
}

const AuthBgNote = ({ src, order }: TProps) => {
  return (
    <div className={`auth-bg-note auth-bg-note-${order}`}>
      <img src={src} alt="" className="auth-bg-note-img" />
    </div>
  );
};

export default AuthBgNote;
