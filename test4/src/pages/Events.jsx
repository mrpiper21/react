import * as React from 'react';
import { generatedate } from './Calendar';
import Eventday from './Eventday';

const Events = ({ dueEvent, handleClick }) => {
  const dates = generatedate();
  const days = ['SU', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <>
      <div>
        {dueEvent.map((id, text, date) => {
          <h1 key={id}>{text}</h1>
        })}
      </div>
      <div className="calendar">
        {days.map((day, index) => (
          <h4 key={index}>{day}</h4>
        ))}
        {dates.map(({ date, currenMonth, today }, index) => (
          <Eventday 
                key={index} 
                date={date}
                dueEvent={dueEvent} 
                currenMonth={currenMonth} 
                today={today} 
                handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};
export default Events;