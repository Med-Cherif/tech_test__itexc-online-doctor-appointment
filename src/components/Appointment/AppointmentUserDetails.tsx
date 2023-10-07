// import React from 'react'
import Avatar from "../common/Avatar";

interface TProps {
  src: string;
  name: string;
  subTitle: string;
  avatarSize?: number;
}

const AppointmentUserDetails = ({
  src,
  name,
  subTitle,
  avatarSize = 56,
}: TProps) => {
  return (
    <div className="appointment-user-details">
      <Avatar src={src} alt="" size={avatarSize} />
      <div className="appointment-user-details-texts">
        <h2 className="appointment-user-details-name">{name}</h2>
        <p className="appointment-user-details-subtitle">{subTitle}</p>
      </div>
    </div>
  );
};

export default AppointmentUserDetails;
