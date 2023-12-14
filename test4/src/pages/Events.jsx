// Events.jsx
import * as React from 'react';
import { useState, useEffect } from 'react';
import Calender from "./Calender"

const Events = () => {
  const [events, setEvents] = useState([]);
  const [dueEvents, setDueEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
          setDueEvents(data); // Set dueEvents initially to all events
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <>
      <div className="calender">
        <Calender events={events} setDueEvents={setDueEvents} />
      </div>
      <div className="event-page">
        <h1>Event page</h1>
        <ul>
          {dueEvents.map((event, index) => (
            <li key={index}>{event.text} - {event.date}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Events;