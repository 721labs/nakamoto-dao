import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    text-rendering: geometricPrecision;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: serif;
  }

  body {
    max-width: 800px;
    padding 20px;
  }

  p {
    margin: 1rem 0;
  }
`;
