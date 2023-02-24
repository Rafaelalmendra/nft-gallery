import styled from "styled-components";

// types
import { ThemeProps } from 'types';

export const Container = styled.div<ThemeProps>`
  position: fixed;
  z-index: 10;
  top: 0;

  width: 100%;
  height: 6.625rem;

  display: flex;
  align-items: center;

  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.background};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Nav = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-between;

  h1 {
    font: 600 1.6rem;

    span {
      color: var(--green);
    }
  }

  i {
    cursor: pointer;
  }
`;
