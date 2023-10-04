import React from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import AppointmentUserDetails from "./AppointmentUserDetails";
import avatar from "../../assets/avatar.png";

const AppointmentListCard = () => {
  return (
    <Card className="appointment-card-item">
      <CardBody>
        <AppointmentUserDetails
          src={avatar}
          name="Username"
          subTitle="08AM - 10AM"
        />
        <p className="appointment-card-description">
          I have been experiencing frequent headaches for the past week. It's
          becoming unbearable, and I'm worried
        </p>
        <div className="appointment-card-item-buttons">
          <Button fullWidth variant="light">
            Decline Appointment
          </Button>
          <Button fullWidth variant="primary">
            Accept Appointment
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default AppointmentListCard;
