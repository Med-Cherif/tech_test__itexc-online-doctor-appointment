interface TProps {
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar = ({ src, alt, size = 56 }: TProps) => {
  const styles = { width: size, height: size, minWidth: size, minHeight: size };

  return (
    <div className="avatar">
      {src ? (
        <img className="avatar-img" src={src} alt={alt} style={{ ...styles }} />
      ) : (
        <div className="avatar-alt" style={{ ...styles }}>
          A
        </div>
      )}
    </div>
  );
};

export default Avatar;
