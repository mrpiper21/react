import * as React from 'react';
import { useParams } from 'react-router-dom'
import { generatedate } from './Calendar';
import Eventday from './Eventday';

const Events = ({ dueEvent, handleClick, seteId }) => {
  const { id } = useParams();
  const dates = generatedate();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  seteId(id)

  return (
    <>
      <div>
        {dueEvent && dueEvent.map((id, text, date) => {
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