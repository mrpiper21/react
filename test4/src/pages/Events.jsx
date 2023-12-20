import * as React from 'react';
import { generatedate } from './Calendar';
import Eventday from './Eventday';

const Events = ({ events, handleClick }) => {
  const dates = generatedate();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

  return (
    <>
      <div className='event-page'>
        {events.map((event) => (
          <h1 key={event._id}>{event.text}</h1>
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
            handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};
export default Events;