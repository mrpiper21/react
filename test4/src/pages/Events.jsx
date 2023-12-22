import * as React from 'react';
import {useState, useEffect} from 'react';
import { generatedate } from './Calendar';
import Eventday from './Eventday';
import axios from 'axios';

const Events = ({ events }) => {
  const dates = generatedate();
  const [selectedDate, setSelectedDate] = useState(null)
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

  const handleDateClick = (date) => {
    setSelectedDate(date)
  }

  return (
    <>
      <div className='event-page'>
      {events.map((event, index) => (
        <div key={index} className='indivedual-event'>
          <span>{event.date}</span>
          <p className='event-text'>{event.text}</p>
          {event.image && <img src={`http://localhost:5000/images/${event.image}`} alt="Event" className='event-images'/>}
          {/* <CSpinner /> */}
        </div>
      ))}
      </div>
      <div className="calendar">
        {days.map((day, index) => (
          <h4 key={index}>{day}</h4>
        ))}
        {dates.map(({ date, currenMonth, today }, index) => (
          <Eventday 
            key={index} 
            date={date} 
            events={events}
            currenMonth={currenMonth} 
            today={today}
            handleDateClick={handleDateClick} 
            selectedDate={selectedDate}
          />
        ))}
      </div>
    </>
  );
};
export default Events;