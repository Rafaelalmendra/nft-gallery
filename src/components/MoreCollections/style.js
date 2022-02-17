import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;

  h3 {
    font-size: 1.875rem;
    font-weight: 400;
  }
`

export const ContainerCollections = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  flex-wrap: wrap;
  gap: 1rem;
`

export const CardCollection = styled.div`
  width: 18.75rem;
  display: flex;
  align-items: center;
  gap: 1.375rem;
  
  margin-top: 2.313rem;
  padding-bottom: 1.6rem;

  border-bottom: 1px solid;

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