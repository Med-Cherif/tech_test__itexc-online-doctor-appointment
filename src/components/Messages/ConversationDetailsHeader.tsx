import React from "react";
import AppointmentUserDetails from "../Appointment/AppointmentUserDetails";
import { BsArrowLeft, BsCameraVideo } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

interface TProps {
  name: string;
  avatar: string;
}

const ConversationDetailsHeader = ({ name, avatar }: TProps) => {
  const navigate = useNavigate();
  return (
    <div className="conversation-datails-header">
      <div className="conversation-datails-header-user">
        <BsArrowLeft
          className="conversation-datails-back-icon"
          onClick={() => {
            navigate("/messages");
          }}
        />
        <AppointmentUserDetails name={name} src={avatar} subTitle="Contact" />
      </div>
      <div className="conversation-details-actions">
        <BsCameraVideo />
        <AiOutlineInfoCircle />
      </div>
    </div>
  );
};

export default ConversationDetailsHeader;
