import cn from './utils/Cn';
import * as React from 'react';

const Eventday = React.memo(({ date, currenMonth, events, today, selectedDate, handleDateClick }) => (
  <button onClick={() => handleDateClick(date)} // Passing the date to handle click
              className={cn(currenMonth ? "current" : "" ,
              'calendar-btn',
              today?"today" : "")}>{date.date()}
  </button>
  ));

export default Eventday
