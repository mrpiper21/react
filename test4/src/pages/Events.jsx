import * as React from 'react';
import { generatedate } from './Calendar';
import cn from './utils/Cn';

const EventDay = React.memo(({ date, currenMonth, today, handleClick }) => (
  <button onClick={handleClick}
              reqType={reqType}
              setreqType={setreqType}
              dueEvent={dueEvent} 
              className={cn(currenMonth ? "current" : "" ,
              'calendar-btn',
              today?"today" : "")}>{date.date()}</button>
));

const Events = ({ reqType, setreqType, dueEvent, handleClick }) => {
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
          <EventDay key={index} date={date} currenMonth={currenMonth} today={today} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};
export default Events;