import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 6.625rem;

  display: flex;
  align-items: center;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--black);

    span {
      color: var(--green);
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--black);

    span {
      color: var(--blue);
    }
  }
`