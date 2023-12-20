import dayjs from "dayjs";

export default function DueEvent({ date, events}) {
    if (!Array.isArray(events)) {
      return <h1>No events available</h1>;
    }

    const parseDate = dayjs(date);
  
    const matchingEvents = events.filter((event) => {
        return dayjs(event.date).isSame(parseDate, 'day')
    });
    if (matchingEvents.length > 0) {
      return matchingEvents.map((event) => <h1 key={event._id}>{event.text}</h1>);
    } else {
      return <h2>No events available</h2>;
    }
  }