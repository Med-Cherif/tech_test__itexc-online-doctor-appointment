import Card from "../../components/common/Card";
import CardBody from "../../components/common/Card/CardBody";
import ProfileTitle from "../../components/profile/ProfileTitle";
import Button from "../../components/common/Button";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import Avatar from "../../components/common/Avatar";
// import profilePicture from "../../assets/profile/cover-picture.png";
// import coverPicture from "../../assets/profile/cover-picture.png";
import ProfileCoverPicture from "../../components/profile/ProfileCoverPicture";
import { useAppSelector } from "../../hooks/useRedux";
import LoaderWrapper from "../../components/common/Loaders/LoaderWrapper";
import ProfileLoader from "../../components/common/Loaders/ProfileLoader";
import MobileHeader from "../../components/Header/MobileHeader";
// import Sidebar from "../../components/Sidebar";

const ProfileDetails = () => {
  const { userData } = useAppSelector((state) => state.user);
  return (
    <>
      <div className="profile-details">
        <MobileHeader title="Profile" />
        <LoaderWrapper
          isLoading={!userData}
          loadingComponent={<ProfileLoader cardsNumber={2} />}
        >
          <Card>
            <ProfileCoverPicture />
            <CardBody>
              <div className="profile-info-wrapper">
                <div className="profile-avatar-wrapper">
                  <Avatar
                    src={userData?.profilePicture}
                    alt={userData?.name}
                    className="profile-avatar"
                  />
                </div>
                <div className="profile-data">
                  <div>
                    <h2 className="profile-name">{userData?.name}</h2>
                    <p className="profile-text profile-speciality">
                      {userData?.speciality}
                    </p>
                    <div className="profile-location">
                      <CiLocationOn />
                      <span>Alger, Algeria</span>
                    </div>
                  </div>
                  <div className="profile-actions">
                    <Link to={"/profile/edit"}>
                      <Button className="edit-profile-button" variant="light">
                        <AiOutlineEdit />
                        <span>Edit Profile</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="profile-card-description">
            <CardBody>
              <ProfileTitle text="Profile Description" />
              <p className="profile-description profile-text">
                {userData?.description}
              </p>
            </CardBody>
          </Card>
        </LoaderWrapper>
      </div>
    </>
    // </LoaderWrapper>
  );
};

export default ProfileDetails;
