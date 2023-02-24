import styled from 'styled-components';

export const Collections = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;
  padding-bottom: 0.5rem;

  font-family: 'Poppins', sans-serif;
  border: 1px solid var(--gray);
  border-radius: 4px;

  @media (max-width: 447px) {
    margin-top: 1.5rem;
    margin-bottom: 4rem;
  }
`;

export const HeaderCollections = styled.div`
  height: 48px;

  display: flex;
  align-items: center;
  gap: 0.688rem;
  margin-bottom: 1rem;

  border-bottom: 1px solid var(--gray);

  i {
    padding-left: 1.313rem;
  }

  @media (max-width: 447px) {
    height: 2.5rem;

    p {
      font-size: 0.875rem;
    }
  }
`;

export const ContainerCollections = styled.div`
  min-width: 25.188rem;
  height: 21rem;
  display: flex;

  overflow-x: scroll;
  overflow-y: hidden;

  @media (max-width: 447px) {
    min-width: 100%;
    height: 19rem;
  }
`;

export const CardCollection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.75rem;

  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 13.313rem;
    height: 13.313rem;
  }
`;

export const CollectionsInformations = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  max-width: 13.313rem;
  gap: 0.4rem;
  padding: 0.5rem;

  font-size: 0.9rem;
  font-weight: 400;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }

  .divider {
    width: 100%;
    border: 1px solid;
    opacity: 0.8;
    margin-top: 0.4rem;
  }

  @media (max-width: 447px) {
    font-size: 0.785rem;
  }
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.8rem;
  font-weight: 400;

  i {
    font-size: 0.9rem;
  }

  @media (max-width: 447px) {
    font-size: 0.7rem;
  }
`;

export const NotImage = styled.div`
 width: 13.313rem;
  height: 13.313rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #333;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--white);
  }
`
