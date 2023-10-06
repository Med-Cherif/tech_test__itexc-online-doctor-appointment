import React from "react";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import DashboardCardTitle from "./DashboardCardTitle";
import Calendar from "../common/Calendar";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import UpcomingMeetItem from "./UpcomingMeetItem";

const DashboardCalendar = () => {
  return (
    <Card className="dashboard-calendar">
      <CardBody>
        <div className="calendar-title">
          <DashboardCardTitle title="Calendar" />
          <BiChevronDown />
        </div>
        <div>
          <Calendar />
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
