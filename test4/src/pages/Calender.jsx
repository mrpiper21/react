import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { createTheme } from '@mui/material/styles'

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
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'StaticDatePicker',
        ]}
      >
        <DemoItem label="Responsive variant" theme={newTheme}>
          <DatePicker defaultValue={dayjs(Date.now())} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Calender