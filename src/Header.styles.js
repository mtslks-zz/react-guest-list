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
  background-color: #4d94c8;
  color: #fff;
  display: flex;
  justify-content: space-around;
  background-image: url(${Headerimage});
  align-items: center;
  position: relative;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  width: 60%;
`;

export const HeaderStyleBottom = css`
  margin: auto;
  height: 80px;
  background-color: #89cdff;
  color: #fff;
  display: flex;
  justify-content: space-around;
  width: 60%;
  position: relative;
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
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

export const fancyRefreshButton = css`
  height: 50px;
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
