import * as React from 'react';
import { generatedate } from './Calendar';
import cn from './utils/Cn';

const EventDay = React.memo(({ date, currenMonth, today, handleClick }) => (
  <button onClick={handleClick} 
              className={cn(currenMonth ? "current" : "" ,
              'calendar-btn',
              today?"today" : "")}>{date.date()}</button>
));

const Events = ({ handleClick }) => {
  const dates = generatedate();
  console.log(dates)
  console.log(Date.now())
  const days = ['SU', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <>
      <div className="calendar">
        {days.map((day, index) => (
          <h4 key={index}>{day}</h4>
        ))}
        {dates.map(({ date, currenMonth, today }, index) => (
          <EventDay key={index} date={date} currenMonth={currenMonth} today={today} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};
export default Events;