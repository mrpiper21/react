import cn from './utils/Cn';
import * as React from 'react';

const Eventday = React.memo(({ date, dueEvent, currenMonth, today, handleClick }) => (
    <button onClick={() => handleClick(date)} // Passing the date to handle click
                dueEvent={dueEvent} 
                className={cn(currenMonth ? "current" : "" ,
                'calendar-btn',
                today?"today" : "")}>{date.date()}</button>
  ));

export default Eventday
