import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    color-scheme: dark;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: ${({ theme }) => theme.colors.black};
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
