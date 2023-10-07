import React from "react";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import DashboardCardTitle from "./DashboardCardTitle";
import Calendar from "../common/Calendar";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import UpcomingMeetItem from "./UpcomingMeetItem";
import { format } from "date-fns";

const markedDates = [
  "2023-10-02",
  "2023-10-05",
  "2023-10-14",
  "2023-10-18",
  "2023-10-10",
  "2023-10-23",
  "2023-10-31",
];

const DashboardCalendar = () => {
  return (
    <Card className="dashboard-calendar">
      <CardBody>
        <div className="calendar-title">
          <DashboardCardTitle title="Calendar" />
          <BiChevronDown />
        </div>
        <div>
          <Calendar
            isMarkedDate={(date) => {
              return markedDates.some((markedDate) => {
                return (
                  format(date, "yyyy-MM-dd") ===
                  format(new Date(markedDate), "yyyy-MM-dd")
                );
              });
            }}
          />
        </div>
        <div className="dashboard-calendar-upcoming">
          <div className="dashboard-calendar-upcoming-header">
            <h2>Upcoming</h2>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              View All
            </Link>
          </div>
          <div>
            <UpcomingMeetItem
              src=""
              alt="M"
              date="8 April, 2021"
              time="04:00 PM"
              title="Montly doctor’s meet"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DashboardCalendar;
