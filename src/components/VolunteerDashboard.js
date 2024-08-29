import React from 'react';

function VolunteerDashboard({ email, volunteers, removeEvent, events }) {
    const userEvents = volunteers.filter(volunteer => volunteer.email === email);

    const registeredEventIds = userEvents.map(event => event.eventId);
    const activeEvents = events.filter(event => registeredEventIds.includes(event.id));

    return (
        <div>
            <h2>Your Volunteering Events</h2>
            <ul>
                {activeEvents.map((event, index) => (
                    <li key={index}>
                        {event.name} - {event.date} at {event.time}
                        <button onClick={() => removeEvent(event.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VolunteerDashboard;