import * as React from 'react';
import { generatedate } from './Calendar';

const EventDay = React.memo(({ date, currenMonth, today, handleClick }) => (
  <button onClick={handleClick} className={ today ? 'today' : currenMonth ? 'current' : ''}>{date.date()}</button>
));

const Events = ({ handleClick }) => {
  const dates = generatedate();
  const days = ['SU', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <>
      <div className="calendar">
        {days.map((day, index) => (
          <h2 key={index}>{day}</h2>
        ))}
        {dates.map(({ date, currenMonth, today }, index) => (
          <EventDay key={index} date={date} currenMonth={currenMonth} today={today} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};
export default Events;