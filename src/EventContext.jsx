import React, { createContext, useState } from 'react';
import dataEvents from './events.json'

const data = dataEvents.reverse()

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState(data);
    return (
        <EventContext.Provider value={{ events, setEvents }}>
            {children}
        </EventContext.Provider>
    );
};