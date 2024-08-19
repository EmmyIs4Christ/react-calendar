import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";

const EventForm = ({ event, onSave, onCancel }) => {
  const [title, setTitle] = useState(event ? event.title : "");
  const [date, setDate] = useState(event ? new Date(event.date) : new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onSave({ id: event ? event.id : uuidv4(), title, date });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy/MM/dd"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EventForm;
