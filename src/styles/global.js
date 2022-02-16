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

  a {
    all: unset;
    cursor: pointer;
  }

  .margin {
    margin: 0 25rem 0 25rem;

    @media (max-width: 1680px) {
      margin: 0 20rem 0 20rem;
    }

    @media (max-width: 1440px) {
      margin: 0 15rem 0 15rem;
    }

    @media (max-width: 1366px) {
      margin: 0 10rem 0 10rem;
    }

    @media (max-width: 1112px) {
      margin: 0 5rem 0 5rem;
    }

    @media (max-width: 1024px) {
      margin: 0 3rem 0 3rem;
    }

    @media (max-width: 834px) {
      margin: 0 2rem 0 2rem;
    }
  }
`