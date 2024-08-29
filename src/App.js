import React, { useState, useEffect } from 'react';
import RegistrationForm from './components/RegistrationForm';
import EventList from './components/EventList';
import LoginForm from './components/LoginForm';
import VolunteerDashboard from './components/VolunteerDashboard';
import './App.css';

const initialEvents = [
  { id: 1, name: 'Community Clean-Up', date: '2024-09-15', time: '10:00' },
  { id: 2, name: 'Food Drive', date: '2024-09-20', time: '14:00' },
  { id: 3, name: 'Charity Run', date: '2024-09-25', time: '08:00' },
];

function App() {
  const [volunteers, setVolunteers] = useState(() => {
    const savedVolunteers = localStorage.getItem('volunteers');
    return savedVolunteers ? JSON.parse(savedVolunteers) : [];
  });
  const [loggedInEmail, setLoggedInEmail] = useState(null);
  const [events] = useState(initialEvents);

  useEffect(() => {
    localStorage.setItem('volunteers', JSON.stringify(volunteers));
  }, [volunteers]);

  const handleRegister = (volunteer) => {
    if (!volunteers.some(v => v.email === volunteer.email)) {
      setVolunteers([...volunteers, { ...volunteer, eventId: null }]);
      setLoggedInEmail(volunteer.email);
    } else {
      alert('This email is already registered. Please login.');
    }
  };

  const addVolunteer = (volunteer) => {
    if (!volunteers.some(v => v.email === volunteer.email && v.eventId === volunteer.eventId)) {
      setVolunteers([volunteer, ...volunteers]);
    }
  };

  const removeEvent = (eventId) => {
    setVolunteers(volunteers.filter(volunteer => !(volunteer.email === loggedInEmail && volunteer.eventId === eventId)));
  };

  const handleLogin = (email) => {
    if (volunteers.some(v => v.email === email)) {
      setLoggedInEmail(email);
    } else {
      alert('Email not found. Please register.');
    }
  };

  return (
    <div className="App">
      <h1>Volunteer Registration Platform</h1>
      {loggedInEmail ? (
        <>
          <VolunteerDashboard
            email={loggedInEmail}
            volunteers={volunteers}
            removeEvent={removeEvent}
            events={events}
          />
          <EventList
            events={events}
            addVolunteer={addVolunteer}
            email={loggedInEmail}
            volunteers={volunteers}
          />
        </>
      ) : (
        <>
          <RegistrationForm onRegister={handleRegister} />
          <LoginForm onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;