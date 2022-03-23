import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin-top: 6.625rem;
  margin-bottom: 4rem;
  color: props => props.theme.colors.text;

  h2 {
    font-size: 1.875rem;
    margin-top: 10.625rem;
    text-transform: capitalize;

    @media (max-width: 768px) {
      margin-top: 8rem;
    }

    @media (max-width: 568px) {
      font-size: 1.475rem;
      text-align: center;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3.75rem;

  @media (max-width: 1680px) {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }

  @media (max-width: 991.98px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17rem;
  max-height: 28rem;
  margin-bottom: 1.875rem;

  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 17rem;
    max-height: 21.313rem;
    border-radius: 4px;
  }

  @media (max-width: 667px) {
    width: 15rem;
    margin-bottom: 1rem;

    img {
      width: 15rem;
    }
  }

  @media (max-width: 568px) {
    width: 100%;
    justify-content: center;

    img {
      width: 100%;
    }
  }
`;

export const Informations = styled.div`
  padding: 0.5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  font-weight: 400;

  .divider {
    width: 100%;
    border: 1px solid;
    opacity: 0.8;
    margin-top: 0.5rem;
  }

  @media (max-width: 667px) {
    gap: 0.5rem;
  }
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;

  i {
    font-size: 1rem;
  }
`;
