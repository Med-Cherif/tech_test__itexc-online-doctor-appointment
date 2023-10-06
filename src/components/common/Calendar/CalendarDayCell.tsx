import React from "react";

interface TProps {
  date: Date;
}

const CalendarDayCell = ({ date }: TProps) => {
  return (
    <td className={"calendar-day-cell"} onClick={() => {}}>
      <span className="day-content">{date.getDate()}</span>
      <span className="day-marker" />
    </td>
  );
};

export default CalendarDayCell;
