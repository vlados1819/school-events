import { useContext } from 'react'; 
import { EventContext } from '../EventContext';
import EventForm from './EventForm';
import EventsList from './EventsList';

const AdminPanel = () => {
    const { events, setEvents } = useContext(EventContext);
    const handleEventSubmit = (eventData, category) => {
        setEvents(prev => [{ ...eventData, id: prev.length + 1, category: [{id: 1, name: eventData.category}]}, ...prev]);};
    return (
        <>
            <EventForm onSubmit={handleEventSubmit} />
        </>
);};

export default AdminPanel 