// Header will only contain a heading and a refresh button, and a countdown timer til the event

import { css } from '@emotion/react';
import {
  HeaderStyleBottom,
  HeaderStyleTop,
  Heading,
  RefreshButton,
  Subheading,
} from './Header.styles.js';

/** @jsxImportSource @emotion/react */

/* function Timer() {
  const countDownDate = new Date('Jan 5, 2022').getTime();
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / 1000);

    // Display the result in the element with id="demo"
    document.getElementById('root').innerHTML = days + 'd ';

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('root').innerHTML = 'EXPIRED';
    }
  }, 1000);
} */

export default function Header() {
  return (
    <div>
      <div css={HeaderStyleTop}>
        <div css={Heading}>New Year's Bash 2021</div>
        <br />
        <div css={Subheading}>Millenial Park, Sin City, 31.12.2021, 19:00</div>
      </div>
      <div css={HeaderStyleBottom}>
        <h3>Add or edit your guests below by using the form</h3>
        <button css={RefreshButton}>Refresh page</button>
      </div>
    </div>
  );
}
