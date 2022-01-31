import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-50: #f5f5f5;
    --gray-200: #dbdbdb;
    --gray-300: #bebebe;
    --gray-800: #383838;
    --gray-900: #181818;
    
    --brown-700: #6d3608;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: var(--gray-800);
  }

  a {
    text-decoration: none;
  }
`;
