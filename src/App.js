/* import { css } from '@emotion/react';
import express from 'express';
/** @jsxImportSource @emotion/react */
/* import { useEffect, useState } from 'react';
import Input from './Input';
import Guestlist from './Guestlist'; */
import Header from './Header';
import Input from './Input';

// API server address
const baseUrl = 'http://localhost:5000';

// start code of App
function App() {
  /*  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // checkbox is not marked as default = not attending
  const [attending, setAttending] = useState(false);

  // Function to create a new guest on API server
  const createGuest = async () => {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: setFirstName, lastName: setLastName }),
    });
    const createdGuest = await response.json();
  };

  // Functionality to delete a guest from API server
  const deleteGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/1`, { method: 'DELETE' });
    const deletedGuest = await response.json();
  };

  // Event handler to control button(s)
  const onSubmit = // some event handler to pop up that the fields are empty
    // Fetching guest list from server --> this should be the default view
    useEffect(() => {
      async function fetchUserList() {
        const response = await fetch(`${baseUrl}/`);
        const allGuests = await response.json();
      }
      fetchUserData();
    }, []); */

  return (
    <div>
      <Header />
      <Input />
    </div>
  );
}

export default App;
