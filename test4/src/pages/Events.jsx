import generatedate from "./Generatedate";
import dayjs from "dayjs";
import { Axios } from "axios";
import { IoAddSharp, IoTrashSharp } from "react-icons/io5";
import { useState, useEffect, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from "./Calendar";
import DueEvent from './utils/DueEvent'
import { UserProvider } from "./features/usercontext";

const Events = ({ events }) => {
  // const [user, setUser] = useContext(UserContext)
  const dates = generatedate();
  const date = dayjs()
  console.log(events)
  // const [logout , setLogout] = useState(null)
  const [monthInWords, setMonthInwords] = useState(date.format('MMMM'))
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateClick = useCallback((date) => {
    setSelectedDate(date)
    const newDate = dayjs(date)
    setMonthInwords(newDate.format('MMMM'))
  }, []);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/admin-panel')

  }

  const token = localStorage.getItem('token')
  try {
    if (token) {
      return (
        <>
        <UserProvider>
          <div>
            {Array.isArray(events) && events.map((event) => (
              <div key={event.id} className='indivedual-event'>
                <span>{event.date}</span>
                <p className='event-text'>{event.text}</p>
                {event.image && <img src={`http://localhost:5000/images/${event.image}`} alt="Event" className='event-images'/>}
                <IoTrashSharp className="trash-icon"/>
              </div>
            ))}
            <div className='event-div'>
              <h3 className='calendar-title'>{monthInWords}</h3>
              <Calendar dates={dates} handleDateClick={handleDateClick} selectedDate={selectedDate} events={events} />
              <div>{selectedDate && <DueEvent date={selectedDate} events={events} />}</div>
            </div>
          </div>
          <button 
              className="add-event" 
              onClick={handleClick}><IoAddSharp className="add-icon"/></button>
        </UserProvider>
        </>
      );
    } else {
      return (
        <>
          <UserProvider>
            <div>
              {Array.isArray(events) && events.map((event) => (
                <div key={event.id} className='indivedual-event'>
                  <span>{event.date}</span>
                  <p className='event-text'>{event.text}</p>
                  {event.image && <img src={`http://localhost:5000/images/${event.image}`} alt="Event" className='event-images'/>}
                </div>
              ))}
              <div className='event-div'>
                <h3 className='calendar-title'>{monthInWords}</h3>
                <Calendar dates={dates} handleDateClick={handleDateClick} selectedDate={selectedDate} events={events} />
                <div>{selectedDate && <DueEvent date={selectedDate} events={events} />}</div>
              </div>
            </div>
          </UserProvider>
        </>
      );
    }
  } catch (error) {
    throw new Error(error)
  }
  
};

export default Events;