import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6.625rem;

  display: flex;
  align-items: center;

  //disable text selection
  -webkit-user-select: none;  
  -moz-user-select: none;     
  -ms-user-select: none;      
  user-select: none; 
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.6rem;
    font-weight: 600;

    span {
      color: var(--green);
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;

    span {
      color: var(--blue);
    }
  }

  i {
    cursor: pointer;
  }
`