import React from "react";
import Avatar from "../common/Avatar";

interface TProps {
  src: string;
  alt: string;
  title: string;
  date: string;
  time: string;
}

const UpcomingMeetItem = ({ src, alt, title, date, time }: TProps) => {
  return (
    <div className="upcoming-meeting-item">
      <div>
        <Avatar src={src} alt={alt} size={46} />
      </div>
      <div>
        <h2 className="upcoming-meeting-item-title">{title}</h2>
        <div className="upcoming-meeting-item-time">
          {date} <span className="upcoming-meeting-item-time-separator">|</span>{" "}
          {time}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetItem;
