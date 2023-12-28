import generatedate from "./Generatedate";
import dayjs from "dayjs";
import { Axios } from "axios";
import { useState, useEffect, useCallback } from 'react'
import Calendar from "./Calendar";
import DueEvent from './utils/DueEvent'

const Events = ({ events }) => {
  const dates = generatedate();
  const date = dayjs()

  const [monthInWords, setMonthInwords] = useState(date.format('MMMM'))
  const [selectedDate, setSelectedDate] = useState(null)
  const [userData, setUserData] = useState(null)

  const handleDateClick = useCallback((date) => {
    setSelectedDate(date)
    const newDate = dayjs(date)
    setMonthInwords(newDate.format('MMMM'))
  }, []);

  // useEffect(() => {
  //   Axios.get('http://localhost:5000/api/user')
  //   .then(response => response.json())
  //   .then(data => setUserData(data))
  //   .catch(err => console.log('Error:', err))
  // },[])

  const token = localStorage.getItem('token')
  try {
    if (token) {
      return (
        <>
          <div>
            {events.map((event) => (
              <div key={event.id} className='indivedual-event'>
                <span>{event.date}</span>
                <p className='event-text'>{event.text}</p>
                {event.image && <img src={`http://localhost:5000/images/${event.image}`} alt="Event" className='event-images'/>}
                <button>delete</button>
              </div>
            ))}
            <div className='event-div'>
              <h3 className='calendar-title'>{monthInWords}</h3>
              <Calendar dates={dates} handleDateClick={handleDateClick} selectedDate={selectedDate} events={events} />
              <div>{selectedDate && <DueEvent date={selectedDate} events={events} />}</div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            {events.map((event) => (
              <div key={event.id} className='indivedual-event'>
                <span>{event.date}</span>
                <p className='event-text'>{event.text}</p>
                {event.image && <img src={`http://localhost:5000/images/${event.image}`} alt="Event" className='event-images'/>}
                <button>delete</button>
              </div>
            ))}
            <div className='event-div'>
              <h3 className='calendar-title'>{monthInWords}</h3>
              <Calendar dates={dates} handleDateClick={handleDateClick} selectedDate={selectedDate} events={events} />
              <div>{selectedDate && <DueEvent date={selectedDate} events={events} />}</div>
            </div>
          </div>
        </>
      );
    }
  } catch (error) {
    throw new Error(error)
  }
  
};

export default Events;