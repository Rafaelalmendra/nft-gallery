import styled from 'styled-components';

export const ContainerCollections = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: 50% 50%;
    gap: 0.875rem;
  }
`;

export const CardCollection = styled.div`
  width: 18.75rem;
  display: flex;
  align-items: center;
  gap: 1.375rem;

  margin-top: 2.313rem;
  padding-bottom: 1.6rem;

  border-bottom: 1px solid;

  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
    gap: 0.875rem;
  }

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 2.938rem;
      height: 2.938rem;
    }
  }
`;

export const Informations = styled.div`
  p {
    font-size: 1.125rem;
    font-weight: 500;
    max-width: 6rem;
    text-indent: 42px each-line;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: 768px) {
      -webkit-line-clamp: 1;
      font-size: 0.85rem;
    }
  }

  button {
    margin-top: 0.438rem;
    font-size: 1rem;
    color: var(--blue);
    background: none;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;

export const NotImage = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #333;

  p {
    font-size: 8px;
    font-weight: 500;
    color: var(--white);
  }
`;
