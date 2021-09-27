// Header will only contain a heading and a refresh button, and a countdown timer til the event

import { css } from '@emotion/react';
import {
  fancyRefreshButton,
  HeaderStyleBottom,
  HeaderStyleTop,
  Heading,
  Subheading,
} from './Header.styles.js';

/** @jsxImportSource @emotion/react */

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
        <button css={fancyRefreshButton}>Refresh page</button>
      </div>
    </div>
  );
}
