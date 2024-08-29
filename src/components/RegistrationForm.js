import React, { useState } from 'react';

function RegistrationForm({ addVolunteer }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [event, setEvent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && event) {
            addVolunteer({ name, email, event });
            setName('');
            setEmail('');
            setEvent('');
        } else {
            alert('Please fill out all fields!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register as a Volunteer</h2>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Choose Event</label>
                <select
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    required
                >
                    <option value="">Select Event</option>
                    <option value="Charity Run">Charity Run</option>
                    <option value="Food Drive">Food Drive</option>
                    <option value="Community Clean-up">Community Clean-up</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;