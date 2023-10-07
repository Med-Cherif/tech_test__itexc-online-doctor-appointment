// import React, { useEffect } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import AppointmentUserDetails from "./AppointmentUserDetails";
// import avatar from "../../assets/avatar.png";
import { TAppointment, TAppointmentStatus } from "../../types/appointment";
import { useMutation } from "@tanstack/react-query";
import appointmentApis from "../../apis/appointmentApis";

interface TProps {
  item: TAppointment;
  setData: React.Dispatch<React.SetStateAction<TAppointment[]>>;
}

const AppointmentListCard = ({ item, setData }: TProps) => {
  const { name, avatar, timeFrom, timeTo, description, _id } = item;

  const { mutate, variables, isLoading } = useMutation({
    mutationFn: (vars: { status: TAppointmentStatus }) => {
      return appointmentApis.updateStatus(_id, vars.status);
    },
    onSuccess() {
      setData((current) => {
        return current.filter((item) => item._id !== _id);
      });
    },
  });

  const status = variables?.status;

  const handleClick = (status: TAppointmentStatus) => {
    mutate({
      status,
    });
  };

  return (
    <Card className="appointment-card-item">
      <CardBody>
        <AppointmentUserDetails
          src={avatar}
          name={name}
          subTitle={`${timeFrom} - ${timeTo}`}
        />
        <p className="appointment-card-description">{description}</p>
        <div className="appointment-card-item-buttons">
          <Button
            fullWidth
            variant="light"
            disabled={isLoading}
            isLoading={isLoading && status === "declined"}
            onClick={() => handleClick("declined")}
          >
            Decline Appointment
          </Button>
          <Button
            fullWidth
            variant="primary"
            disabled={isLoading}
            isLoading={isLoading && status === "accepted"}
            onClick={() => handleClick("accepted")}
          >
            Accept Appointment
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default AppointmentListCard;
