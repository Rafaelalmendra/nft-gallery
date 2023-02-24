import styled from 'styled-components';

// types
import { ThemeProps } from 'types';

export const Container = styled.div<ThemeProps>`
  min-height: 100vh;

  margin-top: 6.625rem;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.text};

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

export const LoadingContainer = styled.div`
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 17rem;
  max-height: 28rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 1.875rem;

  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 17rem;
    height: 17rem;

    object-fit: cover;
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
  display: flex;
  align-items: left;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;

  font-weight: 400;

  .divider {
    width: 100%;
    margin-top: 0.5rem;

    opacity: 0.8;
    border: 1px solid;
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

export const NotImage = styled.div`
  width: 17rem;
  height: 17rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #333;

  p {
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);
  }
`
