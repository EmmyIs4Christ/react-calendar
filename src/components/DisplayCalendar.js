import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Context from "../store/Context";

const CalendarComponent = ({ selectedDate }) => {
  const ctx = useContext(Context);

  return (
    <div>
      <Calendar onChange={ctx.dateChanger} value={ctx.selectedDate} />
    </div>
  );
};

export default CalendarComponent;
