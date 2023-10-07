/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useForm, Controller } from "react-hook-form";
import { useAppSelector } from "../../hooks/useRedux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import handleFileChange from "../../helpers/fileHelpers";
import { useUpdateProfileData } from "../../hooks/useAuth";
import handleFormData from "../../helpers/handleFormData";
import { TObject } from "../../types/TObject";
import LoaderWrapper from "../../components/common/Loaders/LoaderWrapper";
import ProfileLoader from "../../components/common/Loaders/ProfileLoader";
import MobileHeaderDetailsPage from "../../components/Header/MobileHeaderDetailsPage";
import toastAlert from "../../helpers/toastAlert";

const ProfileEdit = () => {
  const profilePicRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { userData } = useAppSelector((state) => state.user);

  const { isLoading, mutate } = useUpdateProfileData();

  const { register, control, handleSubmit } = useForm({
    values: userData
      ? {
          ...userData,
          profilePicture: {
            file: null,
            url: userData.profilePicture,
          },
        }
      : ({} as any),
  });

  const openChangePhotoInput = () => {
    profilePicRef.current?.click();
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const onSubmit = (data: any) => {
    const { name, description, speciality, profilePicture } = data;
    const formData = handleFormData({
      name,
      description,
      speciality,
      profilePicture: profilePicture.file || profilePicture.url || null,
    });

    // console.log(data);
    mutate(formData, {
      onSuccess() {
        navigateToProfile();
      },
      onError() {
        toastAlert("Something went wrong", "error");
      },
    });
  };

  return (
    <div className="profile-edit">
      <MobileHeaderDetailsPage text="Edit Profile" href="profile" />
      <LoaderWrapper
        isLoading={!userData}
        loadingComponent={<ProfileLoader cardsNumber={1} />}
      >
        <Card>
          <CardBody>
            <ProfileTitle text="Edit Profile" />
            <p className="profile-text">
              Your profile will be displayed publicly so be careful what you
              share
            </p>
            <div className="fields-wrapper">
              <div>
                <Label>Cover</Label>
                <ProfileCoverPicture />
              </div>
              <div>
                <Label>Profile Picture</Label>
                <Controller
                  name="profilePicture"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div className="edit-profile-picture">
                        <Avatar src={field.value?.url} alt={userData?.name} />
                        <input
                          ref={profilePicRef}
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files) {
                              const file = files[0];
                              field.onChange(handleFileChange(file));
                            }
                          }}
                        />
                        <div className="edit-profile-buttons">
                          <Button onClick={openChangePhotoInput}>
                            Change Photo
                          </Button>
                          <Button
                            className="delete-photo-button"
                            variant="light"
                            onClick={() => {
                              field.onChange({
                                url: "",
                                file: null,
                              });
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    );
                  }}
                />
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
              <Button onClick={navigateToProfile} variant="simple">
                Cancel
              </Button>
              <Button onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
                Save Changes
              </Button>
            </div>
          </CardBody>
        </Card>
      </LoaderWrapper>
    </div>
  );
};

export default ProfileEdit;
