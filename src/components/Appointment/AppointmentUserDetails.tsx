// import React from 'react'
import Avatar from "../common/Avatar";

interface TProps {
  src: string;
  name: string;
  subTitle: string;
}

const AppointmentUserDetails = ({ src, name, subTitle }: TProps) => {
  return (
    <div className="appointment-user-details">
      <Avatar src={src} alt="" />
      <div className="appointment-user-details-texts">
        <h2 className="appointment-user-details-name">{name}</h2>
        <p className="appointment-user-details-subtitle">{subTitle}</p>
      </div>
    </div>
  );
};

export default AppointmentUserDetails;
