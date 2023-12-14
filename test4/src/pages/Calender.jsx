// Calender.jsx
import * as React from 'react';
import dayjs from 'dayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

const newTheme = (theme) =>
  createTheme({
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
          },
        },
      },
    },
  });

const Calender = ({ events, setDueEvents }) => {
  const [selectDate, setSelectDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectDate(date);
    const dueEventsForDate = events.filter((eventItem) =>
      dayjs(eventItem.date, "MM-DD-YYYY").isSame(date, 'day')
    );
    setDueEvents(dueEventsForDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="Responsive variant" theme={newTheme}>
        <StaticDatePicker
          value={selectDate}
          onChange={handleDateChange}
          events={[] /* Pass empty array as events prop */}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default Calender;