import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue);
  p {
    color: var(--white);
  }
  span {
    margin-left: 0.3rem;
    color: var(--green);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
