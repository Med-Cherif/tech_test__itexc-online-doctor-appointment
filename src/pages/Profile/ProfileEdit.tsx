import React from "react";
import ProfileTitle from "../../components/profile/ProfileTitle";
import Card from "../../components/common/Card";
import CardBody from "../../components/common/Card/CardBody";
import Label from "../../components/common/form/Label";
import Input from "../../components/common/form/Input";
import ProfileCoverPicture from "../../components/profile/ProfileCoverPicture";
import Avatar from "../../components/common/Avatar";
import coverPic from "../../assets/profile/cover-picture.png";
import Button from "../../components/common/Button";

const ProfileEdit = () => {
  return (
    <div className="profile-edit">
      <Card>
        <CardBody>
          <ProfileTitle text="Edit Profile" />
          <p className="profile-text">
            Your profile will be displayed publicly so be careful what you share
          </p>
          <div className="fields-wrapper">
            <div>
              <Label>Cover</Label>
              <ProfileCoverPicture />
            </div>
            <div>
              <Label>Profile Picture</Label>
              <div className="edit-profile-picture">
                <Avatar src={coverPic} />
                <div className="edit-profile-buttons">
                  <Button>Change Photo</Button>
                  <Button className="delete-photo-button" variant="light">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Label>Full Name</Label>
              <Input placeholder="Inpute your Fullname here" />
            </div>
            <div>
              <Label>Speciality</Label>
              <Input placeholder="Inpute your speciality here" />
            </div>
            <div>
              <Label>Profile Description</Label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Inpute your Profile Desciption here"
              />
            </div>
          </div>
          <div className="profile-edit-actions">
            <Button variant="simple">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileEdit;
