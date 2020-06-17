import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #474747;
    min-height: 100vh;
  }

  button, input {
    outline: 0
  }

  table {
    margin: 25px auto;
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: 1rem;
    text-align: left;
    border-top: 1px solid #ccc;
    text-align: center;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media (max-width: 560px) {
    justify-content: space-between;
  }
`;
