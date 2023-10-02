import Card from "../../components/common/Card";
import CardBody from "../../components/common/Card/CardBody";
import ProfileTitle from "../../components/profile/ProfileTitle";
import Button from "../../components/common/Button";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import Avatar from "../../components/common/Avatar";
import profilePicture from "../../assets/profile/cover-picture.png";
import coverPicture from "../../assets/profile/cover-picture.png";

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <Card>
        <div className="cover-picture-wrapper">
          <img className="cover-picture" src={coverPicture} alt="" />
        </div>
        <CardBody>
          <div className="profile-info-wrapper">
            <div className="profile-data">
              <div className="profile-avatar-wrapper">
                <Avatar src={profilePicture} size={140} />
              </div>
              <div>
                <h2 className="profile-name">Dr. Taylor gomez</h2>
                <p className="profile-text profile-speciality">
                  Specialist of skin surgery in Moustafa bacha
                </p>
                <div className="profile-location">
                  <CiLocationOn />
                  <span>Alger, Algeria</span>
                </div>
              </div>
            </div>
            <div className="profile-actions">
              <Link to={"/profile/edit"}>
                <Button className="edit-profile-button" variant="light">
                  <AiOutlineEdit />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="profile-card-description">
        <CardBody>
          <ProfileTitle text="Profile Description" />
          <p className="profile-description profile-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            quidem qui praesentium nam, beatae sit placeat soluta aut iure enim
            sunt impedit natus eaque itaque velit necessitatibus dolor illum
            non.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileDetails;
