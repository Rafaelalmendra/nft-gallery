import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 6.625rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background};
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.1);
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
