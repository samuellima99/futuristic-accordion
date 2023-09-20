import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    flex:1;
    height: 100vh;

    font-family: 'Kanit', sans-serif;
  }
`;
