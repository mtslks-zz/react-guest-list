import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import Headerimage from './images/fireworks_background.jpg';

export const Heading = css`
  font-size: 40px;
  color: #fff;
  margin: 20px;
  font-weight: bold;
`;

export const Subheading = css`
  font-size: 24px;
  color: #fff;
  margin: 20px;
  font-weight: bold;
`;

export const HeaderStyleTop = css`
  height: 180px;
  margin: 5px 0px 5px 0px;
  background-color: #4d94c8;
  color: #fff;
  display: flex;
  justify-content: space-around;
  background-image: url(${Headerimage});
`;

export const HeaderStyleBottom = css`
  margin: 5px 0px 5px 0px;
  background-color: #89cdff;
  color: #fff;
  display: flex;
  justify-content: space-around;
`;

export const RefreshButton = css`
  width: 130px;
  height: 40px;
  margin: 20px;
  padding: 10px;
  border: 0.5px solid;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    background-color: #ced4da;
    opacity: 0.4;
  }
`;
