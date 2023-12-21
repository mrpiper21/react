import * as React from 'react';
import {useState} from 'react';
import { generatedate } from './Calendar';
import Eventday from './Eventday';

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
          <h1 key={index}>{event.text}</h1>
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