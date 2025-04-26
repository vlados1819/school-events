import { useParams} from 'react-router';
import { formatDate } from '../utils';
import { EventContext } from '../EventContext'
import { useContext } from 'react';

const EventDetails = () => {
  const { id } = useParams();
  const eventId = parseInt(id, 10); 
  const { events, setEvents } = useContext(EventContext);
  const event = events.find(event => event.id === eventId);
  document.title =  event.title;
  return (
    <main className="event-detail">
      <div className="event-info">
        <h2>{event.title}</h2>
        <div className="event-categories">
          {event.category.map(cat => (
            <span key={cat.id} className="event-category">{cat.name}</span>
          ))}
        </div>
        <p className="event-date">Дата: {formatDate(event.date)}</p>
        <div className="event-description">
          {event.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
        <img src={event.photo} alt={event.title} className="event-image" />
    </main>
  )
}

export default EventDetails