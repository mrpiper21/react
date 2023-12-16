import dayjs from "dayjs"

export const generatedate = (month=dayjs().month(), year=dayjs().year()) => {
    const startOfMonth = dayjs().year(year).month(month).startOf('month');
  const endOfMonth = startOfMonth.endOf('month');

  const calendarDates = [];

  // Generate dates for the current month
  for (let i = startOfMonth.date(); i <= endOfMonth.date(); i++) {
    calendarDates.push({
      currentMonth: true,
      date: startOfMonth.date(i),
      today: startOfMonth.date(i).isSame(dayjs(), 'day'),
    });
  }

  // Generate dates for the previous month
  for (let i = 0; i < startOfMonth.day(); i++) {
    calendarDates.unshift({
      currentMonth: false,
      date: startOfMonth.subtract(i + 1, 'day'),
    });
  }

  // Generate dates for the next month
  const remaining = 42 - calendarDates.length;
  for (let i = 0; i < remaining; i++) {
    calendarDates.push({
      currentMonth: false,
      date: endOfMonth.add(i + 1, 'day'),
    });
  }

  return calendarDates;
};