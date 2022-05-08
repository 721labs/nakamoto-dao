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
    font-family: serifd;
  }

  body {
    max-width: 800px;
    padding 2rem;
    margin: 0 auto;
  }

  h1 {
    color: navy;
    text-align: right;
  }

  p {
    margin: 1rem 0;
    line-height: 1.5;
  }

  a {
    color: black;
    text-decoration: none;
    border-bottom: 1px dotted;

    color: black;

    &:hover{
      color: navy;
    }
  }

  button {
    padding: 0.75rem 3rem;
    background-color: black;
    color: white;
    border: 0;
    border-radius: 3px;
    cursor: pointer;

    transition: background-color ease-in-out 0.2s;

    &:hover{
      background-color: navy;
    }
  }

  footer {
    margin-top: 3rem;
  }
`;
