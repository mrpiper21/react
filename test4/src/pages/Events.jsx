import generatedate from "./Generatedate";
import dayjs from "dayjs";
import { Axios } from "axios";
import { IoAddSharp, IoTrashSharp } from "react-icons/io5";
import { useState, useEffect, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from "./Calendar";
import DueEvent from './utils/DueEvent'
import { UserProvider } from "./features/usercontext";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Events = ({ events }) => {
  // const [user, setUser] = useContext(UserContext)
  const navigate = useNavigate()
  const dates = generatedate();
  const date = dayjs()
  // console.log(events)
  // const [logout , setLogout] = useState(null)
  const [monthInWords, setMonthInwords] = useState(date.format('MMMM'))
  const [selectedDate, setSelectedDate] = useState(null)
  const [deleteEvent, setDeleteEvent] = useState(false)
  const [deleteError, setDeleteError] = useState(false)

  const handleDelete = (eventId) => {
    fetch(`http://localhost:5000/api/events/${eventId}`, {
      method: 'DELETE',
    }).then(response => {
      if (!response.ok) {
        throw new Error('Check your internet connection')
      }
      return response.json()
    })
      .then(data => {
        console.log(data);
        setDeleteEvent(true)
        setTimeout(() => {
          setDeleteEvent(true)
          navigate(0)
        }, 2000)
      })
      .catch(err => {
        console.log('Error:', err)
        setDeleteError(true)
      })
  }

  const handleDateClick = useCallback((date) => {
    setSelectedDate(date)
    const newDate = dayjs(date)
    setMonthInwords(newDate.format('MMMM'))
  }, []);

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
                <IoTrashSharp 
                  className="trash-icon"
                  onClick={() => handleDelete(event._id)}
                  />
              </div>
            ))}
              {deleteEvent ?
                <Stack sx={{ 
                  width: 'auto', 
                  height: 'auto',
                  top: '7rem',
                  left: '-10rem',
                  textAlign: 'center',
                  position: 'relative'}} spacing={2}>
                <Alert variant="filled" severity="success">
                  Deleted successful!
                </Alert>
              </Stack> : null
              }
              {deleteError ? 
                <Stack sx={{ width: 'auto', 
                              height: 'auto',
                              top: '20rem'}} spacing={2}>
                  <Alert variant="filled" severity="error">
                    An error occurred, please try again!
                  </Alert>
                </Stack> : null}
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