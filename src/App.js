import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Headerimage from './images/fireworks_background.jpg';

// Main page Container
const container = css`
  background: linear-gradient(#0c7b93, #142850);
`;

// Main heading container
const header = css`
  width: auto;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  font-size: 52px;
  color: white;
  font-family: 'Birthstone', cursive;
  background-image: url(${Headerimage});
`;

// just subheader with heading
const subheader = css`
  text-align: center;
  font-size: 36px;
  font-family: 'Lato', sans-serif;
  margin-bottom: 20px;
  margin-top: 30px;
  font-weight: bold;
  color: white;
`;

const footer = css`
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
  color: white;
  padding: 30px;
`;

// Container for input fields
const input = css`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 14px;
  color: white;
  font-family: 'Lato', sans-serif;
`;

// Input fields
const inputField = css`
  display: auto;
  height: 35px;
  width: 50%;
  margin: 5px;
  text-align: center;
  border-radius: 2em;
  font-family: 'Lato', sans-serif;
`;

const table = css`
  width: 50%;
  margin: auto;
  font-size: 14px;
  padding: 10px 30px 10px 40px;
  color: white;
  border-style: dashed;
  border-radius: 1.5em;
  text-align: left;
  font-family: 'Lato', sans-serif;
`;

const buttonContainer = css`
  width: auto;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  font-size: 14px;
  padding: 20px;
`;

const button = css`
  height: 35px;
  width: 75px;
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-style: none;
  border-radius: 2em;
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 200;
  color: #ffffff;
  background-color: #4eb5f1;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    background-color: #4095c6;
  }
  @media all and (max-width: 30em) {
     & {
      display: block;
      margin: 0.2em auto;
    }
  }
  &:active {
    transform: scale(0.96);
  }
  &:disabled {
    opacity: 0.4;
  }
`;

const buttonCancel = css`
  height: 35px;
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-style: none;
  border-radius: 2em;
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 200;
  color: #ffffff;
  background-color: #c5442a;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    background-color: #711d14;
  }
  @media all and (max-width: 30em) {
     & {
      display: block;
      margin: 0.2em auto;
    }
  }
  &:active {
    transform: scale(0.96);
  }
  &:disabled {
    opacity: 0.4;
  }
`;

// API server address
const baseUrl = 'https://ml-react-guest-list.herokuapp.com';

function App() {
  const [guestlist, setGuestlist] = useState();

  // Guest List input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState({});
  const [loading, setLoading] = useState(false);
  const [allGuests, setAllGuests] = useState('');
  const checkboxFunction = Object.keys(checkbox);

  // Fetching data from server
  useEffect(() => {
    const getGuestlist = async () => {
      const response = await fetch(`${baseUrl}/`);
      const data = await response.json();
      setGuestlist(data);
      setLoading(true);
    };
    getGuestlist();
  }, []);

  if (!loading) {
    return <div>Guestlist Application is loading...</div>;
  }

  // Entry submit functionality:
  function handleSubmit(e) {
    e.preventDefault();

    // ...then create a new guest on server
    async function createNewGuest() {
      const response = await fetch(`${baseUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });

      const createdGuest = await response.json();
      window.location.reload();
      return createdGuest;
    }

    createNewGuest();
  }

  // When the delete button is clicked, the selected user is deleted from API
  function handleDelete() {
    async function deleteGuest() {
      const response = await fetch(`${baseUrl}/${checkboxFunction}`, {
        method: 'DELETE',
      });

      const deletedGuest = await response.json();

      window.location.reload();
      return deletedGuest;
    }
    deleteGuest();
  }

  // Function to change state of guest to "attending"
  function handleAttend() {
    async function attendingGuest() {
      const response = await fetch(`${baseUrl}/${checkboxFunction}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attending: '✅',
        }),
      });

      const updatedGuest = await response.json();

      window.location.reload();
      return updatedGuest;
    }
    attendingGuest();
  }

  // Function to change state of guest to "not attending"
  function handleNotAttend() {
    async function notAttendingGuest() {
      const response = await fetch(`${baseUrl}/${checkboxFunction}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attending: '❌',
        }),
      });

      const updatedGuest = await response.json();

      window.location.reload();
      return updatedGuest;
    }
    notAttendingGuest();
  }

  // App rendering
  return (
    <div css={container}>
      <section>
        <div css={header}>
          <h1>New Year's Bash 2021</h1>
        </div>
        <div css={subheader}>Add guest details</div>
        <div css={input}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name:</label>
            <input
              id="firstName"
              css={inputField}
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
            />
            <br />
            <label htmlFor="lastName">Last name:</label>
            <input
              id="lastName"
              css={inputField}
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
            />
            <div css={buttonContainer}>
              <button css={button}>Add</button>
            </div>
          </form>
        </div>

        <div css={subheader}>Attendees</div>
        <div>
          <table css={table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>First Name</th>
                <th>RSVP Status</th>
                <th>Modify</th>
              </tr>
              {guestlist.map((entry) => (
                <tr key={entry.id}>
                  <th>{entry.lastName}</th>
                  <th>{entry.firstName}</th>
                  <th>{entry.attending}</th>
                  <input
                    type="checkbox"
                    defaultChecked={checkbox[entry.id]}
                    onChange={() => {
                      setCheckbox({ ...checkbox, [entry.id]: true });
                    }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div css={buttonContainer}>
          <button css={button} type="button" onClick={(e) => handleAttend(e)}>
            Confirm
          </button>
          <button
            css={buttonCancel}
            type="button"
            onClick={(e) => handleNotAttend(e)}
          >
            Cancel
          </button>

          <button
            css={button}
            type="button"
            onClick={(item) => handleDelete(item.id)}
            id="delete guest"
          >
            Delete
          </button>
        </div>
      </section>
      <p />
      <div css={footer}>
        <center>
          made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by Mathias Lukas
        </center>
      </div>
    </div>
  );
}

export default App;
