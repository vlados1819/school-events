import React from 'react'
import {useState, useContext} from 'react'
import { EventContext } from '../EventContext'
import EventCard from '../components/EventCard'

const EventsList = () => {
    const [page, setPage] = useState(1);
    const { events, setEvents } = useContext(EventContext);
    const perPage = 5;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const displayedEvents = events.slice(start, end);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
    <>
    <h2>Мероприятия</h2>
        <div className="events-container">
            {displayedEvents.map(event => <EventCard key={event.id} event={event} url={'' + event.id}/>)}
        </div>
        <div className="events-pagination">
            {Array.from({ length: Math.ceil(events.length / perPage) }, (_, i) => (
            <button
                key={i + 1}
                onClick={() => {
                setPage(i + 1);
                setTimeout(scrollToTop, 0);
                }}
                className={page === i + 1 ? 'active' : ''}
            >
                {i + 1}
            </button>
            ))}
        </div>
        </>
    )
}

export default EventsList