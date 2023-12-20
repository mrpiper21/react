import cn from './utils/Cn';
import * as React from 'react';
import DueEvent from './utils/DueEvent';

const Eventday = React.memo(({ date, currenMonth, events, today, selectedDate, handleDateClick }) => (
  <>
    <button onClick={() => handleDateClick(date)} // Passing the date to handle click
                className={cn(currenMonth ? "current" : "" ,
                'calendar-btn',
                today?"today" : "")}>{date.date()}
    </button>
    <div className='due-event'>{selectedDate && <DueEvent date={selectedDate} events={events} />}</div>
  </>
  ));

export default Eventday
