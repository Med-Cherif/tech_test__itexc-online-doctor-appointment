import coverPicture from "../../assets/profile/cover-picture.png";

const ProfileCoverPicture = () => {
  return (
    <div className="cover-picture-wrapper">
      <img className="cover-picture" src={coverPicture} alt="" />
    </div>
  );
};

export default ProfileCoverPicture;
