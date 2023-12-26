import * as React from 'react';
import Eventday from './Eventday';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

const Calendar = ({ dates, handleDateClick, selectedDate, events }) => (
    <>
      {/* <div className='cal-days'>
        
      </div> */}
      <div className="calendar">
        <div>
          {days.map((day, index) => (
              <h6 className='cal-days' key={index}>{day}</h6>
            ))}
        </div>
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
    </>

);

export default Calendar;