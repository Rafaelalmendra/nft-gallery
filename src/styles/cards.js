import styled from "styled-components";

export const ContainerCollections = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  flex-wrap: wrap;
  gap: 1.5rem;
`

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

  &:hover {
    transform: scale(1.02);
  }

  img {
    border-radius: 50%;
    width: 4.375rem;
    height: 4.375rem;
  }
`

export const Informations = styled.div`
  p {
    font-size: 1.125rem;
    font-weight: 500;
    max-width: 12rem;
    text-indent: 42px each-line;
  }

  button {
    margin-top: 0.438rem;
    font-size: 1rem;
    color: var(--blue);
    background: none;
  }
`