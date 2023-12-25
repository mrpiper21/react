import * as React from 'react';
import Eventday from './Eventday';
import dayjs from 'dayjs';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

const Calendar = ({ dates, handleDateClick, selectedDate, events }) => (
    <div className="calendar">
        {days.map((day, index) => (
            <h4 key={index}>{day}</h4>
        ))}
        {dates.map(({ date, currenMonth, today }) => (
        <Eventday 
          key={date} 
          date={date} 
          events={events}
          currenMonth={currenMonth} 
          today={today}
          handleDateClick={handleDateClick} 
          selectedDate={selectedDate}
        />
      ))}
    </div>
);

export default Calendar;