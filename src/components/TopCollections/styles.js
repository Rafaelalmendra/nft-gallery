import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  h3 {
    font-size: 1.875rem;
    font-weight: 400;
  }
`

export const ContainerCollections = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const CardCollection = styled.div`
  min-width: 18.75rem;
  display: flex;
  align-items: center;
  gap: 1.375rem;
  
  margin-top: 2.313rem;
  padding-bottom: 1.6rem;

  border-bottom: 1px solid;

  img {
    border-radius: 50%;
    max-width: 4.375rem;
  }
`

export const Informations = styled.div`
  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  button {
    margin-top: 0.438rem;
    font-size: 1rem;
    color: var(--blue);
    background: none;
  }
`