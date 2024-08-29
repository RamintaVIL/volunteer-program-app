import React from 'react';

function EventList({ volunteers }) {
    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {volunteers.map((volunteer, index) => (
                    <li key={index}>
                        {volunteer.name} ({volunteer.email}) has registered for {volunteer.event}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;