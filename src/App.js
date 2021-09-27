import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Header from './Header';
import Headerimage from './images/fireworks_background.jpg';
import Input from './Input';

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
  font-family: 'Birthstone', sans-serif;
  margin-bottom: 20px;
`;

// Container for inputfield
const input = css`
  width: auto;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-around;
  font-size: 14px;
  margin: 20 20 20 20px;
`;

// Inputfield buttons
const inputField = css`
  height: 35px;
  width: 35%;
  margin-bottom: 5px;
  margin-right: 3px;
  text-align: center;
  border-radius: 2em;
`;

const table = css`
  width: 70%;
  display: flex;
  margin: auto;
  justify-content: center;
  font-size: 14px;
  padding: 30px;
`;

const buttonContainer = css`
  width: auto;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  font-size: 14px;
  padding: 10px;
`;

const button = css`
  height: 35px;
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-style: none;
  border-radius: 2em;
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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

  // Fetching data from server
  useEffect(() => {
    const getGuestlist = async () => {
      const response = await fetch(`${baseUrl}/`);
      const data = await response.json();
      setGuestlist(data);
    };
    getGuestlist();
  }, []);

  // Object.keys() returns an array of strings which are values of specific key of the object
  const checkboxKeys = Object.keys(checkbox);

  if (!guestlist) {
    return (
      <div
        style={{
          familyFont: 'Roboto',
          fontWeight: '300',
          color: 'navy',
          fontSize: '20px',
          textAlign: 'center',
          marginTop: '20rem',
        }}
      >
        Guestlist Application is loading...
      </div>
    );
  }

  // When the submit button is clicked
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

  // When the delete button is clicked
  function handleDelete() {
    async function deleteGuest() {
      const response = await fetch(`${baseUrl}/${checkboxKeys}`, {
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
      const response = await fetch(`${baseUrl}/${checkboxKeys}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attending: true,
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
      const response = await fetch(`${baseUrl}/${checkboxKeys}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attending: false,
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
    <div>
      <section>
        <div css={header}>
          <h1>New Year's Bash 2021</h1>
        </div>
        <div css={subheader}>
          <h3>Please enter guest details:</h3>
        </div>
        <div css={input}>
          <form onSubmit={handleSubmit}>
            <input
              css={inputField}
              placeholder="Last name"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              css={inputField}
              placeholder="First name"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />{' '}
            <button css={button}>Addg</button>
          </form>
        </div>

        <div>
          <div>
            <table css={table}>
              <tbody>
                <tr>
                  <th>Select</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Attending?</th>
                </tr>

                {guestlist.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        defaultChecked={checkbox[item.id]}
                        onChange={() => {
                          setCheckbox({ ...checkbox, [item.id]: true });
                        }}
                      />
                    </td>
                    <td> {item.lastName} </td>

                    <td> {item.firstName} </td>

                    <td>{`${item.attending}`}</td>
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
        </div>
      </section>
    </div>
  );
}

export default App;
