import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { createTheme } from '@mui/material/styles'
import { useState, useEffect } from 'react';

const newTheme = (theme) => createTheme({
  ...theme,
  components: {
    MuiPickersMonth: {
      styleOverrides: {
        root: {
          color: '#1565c0',
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#2196f3',
          border: '1px solid',
          backgroundColor: '#bbdefb',
        }
      }
    }
  }
})

const Calender = () => {
  const [events, SetEvents] = useState([]);
  const [selectDate, setSelectDate] = useState(null);
  const [dueEvents, setDueEvents] = useState([])

  // events fetched from the API and stored in the 'events' state using useEffect as
  // shown in your previous code

  const handleDateChange = (date) => {
    setSelectDate(date);
    const dueEventsForDate = events.filter((eventItem) => dayjs(eventItem.date).isSame(date, 'day'))
    setDueEvents(dueEventsForDate)
  }

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://localhost:5000/api/events')
        if (response.ok) {
          const data = await response.json();
          SetEvents(data);
        } else {
          console.error('Failed to fetch events')
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
    fetchEvents();
  }, [])
  console.log(dueEvents)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'StaticDatePicker',
        ]}
      >
        <DemoItem label="Responsive variant" theme={newTheme}>
          <DatePicker
            value={selectDate}
            onChange={handleDateChange} 
            // defaultValue={dayjs(Date.now())}
            events={dueEvents}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Calender