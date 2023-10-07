import { format } from "date-fns";
import { useState, useMemo } from "react";
// import classNames from "classnames";
import CalendarDayCell from "./CalendarDayCell";
import getDaysInMonth from "../../../helpers/dataHelpers";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { IDisabledDates, IRange } from "../../types/calendar";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Frinday",
  "Saturday",
];

// interface IProps {
//   date: Date;
//   onDateClick?: (date: Date) => void;
// }

const Calendar = () => {
  // date = new Date(date || new Date());
  //   const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const daysInMonth = getDaysInMonth(
    selectedMonth.getMonth(),
    selectedMonth.getFullYear()
  );
  const firstDay = new Date(
    selectedMonth.getFullYear(),
    selectedMonth.getMonth()
  ).getDay();

  //   console.log({ daysInMonth, firstDay, date });

  const weeksNumber = useMemo(() => {
    const length = daysInMonth.length;
    return Math.ceil((length + firstDay) / 7);
  }, [daysInMonth, firstDay]);

  const handleMonthChange = (plus?: boolean) => {
    setSelectedMonth((current) => {
      const month = current.getMonth();
      return new Date(current.getFullYear(), plus ? month + 1 : month - 1);
    });
  };

  const days = useMemo(() => {
    const list = [];
    for (let i = 0; i <= weeksNumber; i++) {
      for (let j = 0; j < 7; j++) {
        const currentDay = i * 7 + j + 1 - firstDay;
        const currentDate = new Date(
          selectedMonth.getFullYear(),
          selectedMonth.getMonth(),
          currentDay
        );
        if (currentDate.getMonth() === selectedMonth.getMonth()) {
          list.push(currentDate);
        } else {
          list.push(null);
        }
      }
    }
    return list;
  }, [selectedMonth, firstDay]);

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <p className="calendar-year-month">
          {format(selectedMonth, "MMMM yyyy")}
        </p>
        <div className="calendar-header-actions">
          <BiChevronLeft onClick={() => handleMonthChange(false)} />
          <BiChevronRight onClick={() => handleMonthChange(true)} />
        </div>
      </div>
      <hr />
      <table className="calendar">
        <thead>
          <tr>
            {weekDays.map((weekDay) => {
              return <td key={weekDay}>{weekDay.slice(0, 2)}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: weeksNumber }).map((_, idx) => {
            const currentWeek = days.slice(idx * 7, idx * 7 + 7);
            return (
              <tr key={idx}>
                {currentWeek.map((weekDay, index) => {
                  return weekDay ? (
                    <CalendarDayCell
                      key={weekDay.getTime()}
                      date={weekDay}
                      //   disabledDates={disabledDates}
                      //   onDateClick={onDateClick}
                      //   range={range}
                      //   key={index}
                      //   day={weekDay}
                    />
                  ) : (
                    <td key={index} style={{ cursor: "auto" }}></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
