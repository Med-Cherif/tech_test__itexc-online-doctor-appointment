import React, { useMemo } from "react";
import AppointmentListCard from "./AppointmentListCard";
import { TAppointmentTabProps } from "../../pages/Appointments";
import { TAppointment } from "../../types/appointment";
import { format } from "date-fns";

const AppointmentCards = ({ data, setData }: TAppointmentTabProps) => {
  const groupedAppointments = useMemo(() => {
    const group: { [prop: string]: TAppointment[] } = {};
    data.forEach((item) => {
      const { date } = item;
      if (!group[date]) {
        group[date] = [item];
      } else {
        group[date] = [...group[date], item];
      }
    });
    return group;
  }, [data]);
  return (
    <>
      {Object.entries(groupedAppointments).map(([date, appointments]) => {
        return (
          <div key={date}>
            <p className="appointments-cards-date">
              {format(new Date(date), "MMM dd, yyyy")}
            </p>
            <div className="appointments-cards">
              {appointments.map((item) => {
                return (
                  <AppointmentListCard
                    key={item._id}
                    item={item}
                    setData={setData}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AppointmentCards;
