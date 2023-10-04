/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import ProfileTitle from "../../components/profile/ProfileTitle";
import Card from "../../components/common/Card";
import CardBody from "../../components/common/Card/CardBody";
import Label from "../../components/common/form/Label";
import Input from "../../components/common/form/Input";
import ProfileCoverPicture from "../../components/profile/ProfileCoverPicture";
import Avatar from "../../components/common/Avatar";
import coverPic from "../../assets/profile/cover-picture.png";
import Button from "../../components/common/Button";
import { useForm } from "react-hook-form";
import { useGetUserAuth } from "../../hooks/useAuth";
import { useAppSelector } from "../../hooks/useRedux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const profilePicRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { isLoading } = useGetUserAuth();

  const { userData } = useAppSelector((state) => state.user);

  const { register, control, handleSubmit } = useForm({
    values: userData ?? ({} as any),
  });

  const openChangePhotoInput = () => {
    profilePicRef.current?.click();
  };

  const { mutate, isLoading: isSubmitting } = useMutation({});

  const onCancel = () => {
    navigate("/profile");
  };

  const onSubmit = () => {};

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
                <input
                  ref={profilePicRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={() => {}}
                />
                <div className="edit-profile-buttons">
                  <Button onClick={openChangePhotoInput}>Change Photo</Button>
                  <Button className="delete-photo-button" variant="light">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Label>Full Name</Label>
              <Input
                placeholder="Inpute your Fullname here"
                {...register("name")}
              />
            </div>
            <div>
              <Label>Speciality</Label>
              <Input
                placeholder="Inpute your speciality here"
                {...register("speciality")}
              />
            </div>
            <div>
              <Label>Profile Description</Label>
              <textarea
                {...register("description")}
                className="form-control"
                rows={3}
                placeholder="Inpute your Profile Desciption here"
              />
            </div>
          </div>
          <div className="profile-edit-actions">
            <Button onClick={onCancel} variant="simple">
              Cancel
            </Button>
            <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting}>
              Save Changes
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileEdit;
