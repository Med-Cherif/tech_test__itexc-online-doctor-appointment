import React from "react";

interface TProps {
  date: Date;
  isMarkedDate?: (date: Date) => boolean;
}

const CalendarDayCell = ({ date, isMarkedDate }: TProps) => {
  return (
    <td className={"calendar-day-cell"} onClick={() => {}}>
      <span className="day-content">{date.getDate()}</span>
      <span
        className={`day-marker ${
          date ? (isMarkedDate?.(new Date(date)) ? "marked" : "") : ""
        }`}
      />
    </td>
  );
};

export default CalendarDayCell;
