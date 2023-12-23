import dayjs from "dayjs";

export default function DueEvent({ date, events}) {
    if (!Array.isArray(events)) {
      return <h1>No events available</h1>;
    }

    const parseDate = dayjs(date);
    const formattedDate = parseDate.format('YYYY-MM-DD')
  
    const matchingEvents = events.filter((event) => {
        return dayjs(event.date).isSame(parseDate, 'day')
    });
    if (matchingEvents.length > 0) {
      return matchingEvents.map((event) => (
          <span className="due-event" key={event._id}>{event.text}</span>
        ))
    } else {
      return <h4 className="due-event-text due-event">No events available for {formattedDate}</h4>;
    }
  }