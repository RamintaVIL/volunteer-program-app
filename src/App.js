import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import EventList from './components/EventList';
import './App.css';

function App() {
  const [volunteers, setVolunteers] = useState([]);

  const addVolunteer = (volunteer) => {
    setVolunteers([volunteer, ...volunteers]);
  };

  return (
    <div className="App">
      <h1>Volunteer Registration Platform</h1>
      <RegistrationForm addVolunteer={addVolunteer} />
      <EventList volunteers={volunteers} />
    </div>
  );
}

export default App;
