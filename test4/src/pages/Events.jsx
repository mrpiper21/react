// Events.jsx
import * as React from 'react';
import { useState, useEffect } from 'react';
import { generatedate } from './Calendar';

const Events = () => {
  const dates = generatedate()
  const days = ['SU', 'M', 'T', 'W', 'T', 'F', 'S'];
  // const [events, setEvents] = useState([]);
  // const [dueEvents, setDueEvents] = useState([]);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/events');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setEvents(data);
  //         setDueEvents(data); // Set dueEvents initially to all events
  //       } else {
  //         console.error('Failed to fetch events');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching events:', error);
  //     }
  //   }
  //   fetchEvents();
  // }, []);

  return (
    <>
      <div className="calendar">
        {days.map((day, index) => {
          return <h2 key={index}>{day}</h2>
        })}
        {dates.map(({ date, currenMonth, today }, index) => {
          return(
              <h4 key={index} className={today ? 'today' : currenMonth ? 'current' : ''}>{date.date()}</h4>
          )
        })}
      </div>
      {/* <div className="event-page">
        <h1>Event page</h1>
        <ul>
          {dueEvents.map((event, index) => (
            <li key={index}>{event.text} - {event.date}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Events;