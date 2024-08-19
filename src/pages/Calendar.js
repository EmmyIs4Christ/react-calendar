import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import "./Calendar.module.css"; // Import the CSS file
import CalendarComponent from "../components/DisplayCalendar";
import styles from "./Calendar.module.css";

import Context from "../store/Context";

const Calendar = () => {
  const ctx = useContext(Context);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(fetchedEvents);
  }, []);

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div className={styles.calendarContainer}>
      <h1>
        Welcome<span> {ctx.user}</span> to React Calendar
      </h1>
      <div className={styles.cComponent}>
        <CalendarComponent />
      </div>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/event/new"
      >
        Add New Event
      </Button>
      <List>
        {events.map((event) => (
          <ListItem key={event.id} className={styles.eventItem}>
            <Link to={`/todo/${event.title}`}>
              <ListItemText
                className={styles.li}
                primary={event.title}
                secondary={format(new Date(event.date), "MMM d, yyyy")}
              />
            </Link>

            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to={`/event/${event.id}`}
              className={styles.eventButton}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteEvent(event.id)}
              className={styles.eventButton}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Calendar;
