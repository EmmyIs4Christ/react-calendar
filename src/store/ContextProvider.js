import Context from "./Context";

import React, { useState } from "react";

const ContextProvider = (props) => {
  //   const [events, setEvents] = useState([]);
  const [user, setUser] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editingEvent, setEditingEvent] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setEditingEvent(null); // Clear editing event when date changes
  };

  //   const filteredEvents = events.filter(
  //     (event) =>
  //       new Date(event.date).toDateString() === selectedDate.toDateString()
  //   );

  const ctxValue = {
    // events,
    selectedDate,
    setUser,
    user,
    dateChanger: handleDateChange,
  };
  return <Context.Provider value={ctxValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
