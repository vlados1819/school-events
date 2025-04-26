import { Link } from "react-router"
import { formatDate } from "../utils"

const EventCard = ({event, url}) => {
  
  return (
    <div className="event-card">
      <div className="img" style={{ backgroundImage: `url(${event.photo})` }}>
      </div>
        <div className="card-content">
            <h3>{`${event.title.slice(0,40)}${(event.title.length < 40) ? '': '...'}`}</h3>
            <p>{formatDate(event.date)}</p>
            <Link to={url}>Подробнее</Link>
        </div>
    </div>
  )
}

export default EventCard