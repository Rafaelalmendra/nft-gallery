import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;

  h3 {
    font-size: 1.875rem;
    font-weight: 400;
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  margin-top: 3.625rem;

  button:disabled {
    opacity: 0.4;
  }
  
  i {
    font-size: 2rem;
    color: var(--blue);
    cursor: pointer;
  }
`