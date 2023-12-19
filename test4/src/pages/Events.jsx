import * as React from 'react';
import { generatedate } from './Calendar';
import Eventday from './Eventday';

const Events = ({ events, handleClick }) => {
  const dates = generatedate();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

  return (
    <>
      <div>
        {events && events.map((id, text, date) => (
          <h1 key={id}>{events.text}</h1>
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
            currenMonth={currenMonth} 
            today={today} 
            handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};
export default Events;