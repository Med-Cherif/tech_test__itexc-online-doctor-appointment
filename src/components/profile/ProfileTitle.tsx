interface TProps {
  text: string;
}

const ProfileTitle = ({ text }: TProps) => {
  return <h2 className="profile-title">{text}</h2>;
};

export default ProfileTitle;
