import React from "react";

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div>
      <h3>Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <span>{event.title}</span>
            <button onClick={() => onEdit(event)}>Edit</button>
            <button onClick={() => onDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
