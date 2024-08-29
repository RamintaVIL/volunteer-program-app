import React from 'react';

function EventList({ events, addVolunteer, email, volunteers }) {
    const registeredEventIds = volunteers
        .filter(volunteer => volunteer.email === email)
        .map(volunteer => volunteer.eventId);

    const availableEvents = events.filter(event => !registeredEventIds.includes(event.id));

    return (
        <div>
            <h2>Available Events</h2>
            <ul>
                {availableEvents.map((event, index) => (
                    <li key={index}>
                        {event.name} - {event.date} at {event.time}
                        <button onClick={() => addVolunteer({ email, eventId: event.id })}>Register</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;