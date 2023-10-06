interface TProps {
  src?: string;
  size?: number;
  alt?: string;
  className?: string;
}

const Avatar = ({ src, alt, className = "", size = 56 }: TProps) => {
  const styles = { width: size, height: size, minWidth: size, minHeight: size };

  return (
    <div className={`avatar ${className}`}>
      {src ? (
        <img className="avatar-img" src={src} alt={alt} style={{ ...styles }} />
      ) : (
        <div className="avatar-alt" style={{ ...styles }}>
          {alt?.slice(0, 1) || "A"}
        </div>
      )}
    </div>
  );
};

export default Avatar;
