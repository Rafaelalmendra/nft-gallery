import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --blue: #2081E2;
    --green: #75FCBA;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body, textarea, button {
    font-family: 'Roboto', sans-serif;
    border: none;
    -webkit-font-smoothing: antialiased;

    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};

    &:focus {
      border: 0 none;
      outline: 0;
    }
  }

  button {
    cursor: pointer;
  }
`