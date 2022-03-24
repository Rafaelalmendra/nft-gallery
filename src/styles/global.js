import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --gray: #B1B1B1;
    --blue: #2081E2;
    --blue-hover: #1C75CF;
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
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
    border: none;
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
  ::-webkit-scrollbar {
    height: 0.65rem;
    width: 0.625rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--gray);
  }
  .swiper-wrapper {
    padding-inline-start: 0;
  }
  .swiper-pagination-bullet-active {
    background: var(--white);
    opacity: 1;
  }
  .loading {
    width: 98%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--blue);
    border-color: var(--blue) transparent var(--blue) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .margin {
    margin: 0 25rem 0 25rem;
    @media (max-width: 1680px) {
      margin: 0 18rem 0 18rem;
    }
    @media (max-width: 1440px) {
      margin: 0 12rem 0 12rem;
    }
    @media (max-width: 1366px) {
      margin: 0 8rem 0 8rem;
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
`;
