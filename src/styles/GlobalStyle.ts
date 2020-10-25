import { createGlobalStyle } from 'styled-components';
import { backgroundColor, marineBlueColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${backgroundColor};
    color: ${marineBlueColor};
    -webkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong, body, input, button {
    font-size: 10px;
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
`;