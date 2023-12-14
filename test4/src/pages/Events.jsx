import Calender from "./Calender"
const Events = ({ events }) => {
  return (
    <>
      <div className="calender">
        <Calender />
      </div>
      
      <div className="event-page">
        <h1>Event page{events}</h1>
      </div>
    </>
  )
}

export default Events