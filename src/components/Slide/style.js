import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.625rem;
  img {
    width: 100%;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;
