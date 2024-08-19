import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

import styles from "./FormEvent.module.css";
import SelectInput from "@mui/material/Select/SelectInput";
const EventForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({ title: "", date: "" });

  useEffect(() => {
    if (id) {
      const events = JSON.parse(localStorage.getItem("events")) || [];
      const existingEvent = events.find((e) => e.id === id);
      if (existingEvent) {
        setEvent({ title: existingEvent.title, date: existingEvent.date });
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const events = JSON.parse(localStorage.getItem("events")) || [];
    if (id) {
      const updatedEvents = events.map((e) =>
        e.id === id ? { ...e, ...event } : e
      );
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    } else {
      const newEvent = { ...event, id: uuidv4() };
      console.log(events);
      events.push(newEvent);
      localStorage.setItem("events", JSON.stringify(events));
    }
    navigate("/calendar");
  };

  return (
    <div className={styles.eventFormContainer}>
      <Typography variant="h4" gutterBottom>
        {id ? "Edit Event" : "Add New Event"}
      </Typography>
      <form onSubmit={handleSubmit} className={styles.eventForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              name="title"
              value={event.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date"
              name="date"
              type="date"
              value={
                event.date ? format(new Date(event.date), "yyyy-MM-dd") : ""
              }
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {id ? "Save Changes" : "Add Event"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EventForm;
