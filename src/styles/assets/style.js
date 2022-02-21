import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.625rem;
  margin-bottom: 4rem;
  min-height: 100vh;
  color: props => props.theme.colors.text;
`

export const AssetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.625rem;
  margin-top: 10rem;
`

export const ImageAndOwner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  img {
    max-width: 25.188rem;
    max-height: 25.188rem;
    border-radius: 4px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

    span {
      color: var(--blue);
      cursor: pointer;
    }
  }
`

export const Informations = styled.div`
  max-width: 25.188rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.25rem;
  }

  button {
    width: 100%;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background: var(--blue);
    border-radius: 4px;
    color: var(--white);

    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: filter 0.1s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Description = styled.div`
  width: 25.125rem;

  font-family: 'Poppins', sans-serif;
  border: 1px solid var(--gray);
  border-radius: 4px;
`

export const Header = styled.div`
  height: 3.125rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray);

  p, i {
    padding-left: 0.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 8.5rem;
  font-size: 0.875rem;

  span {
    color: var(--blue);
    cursor: pointer;
  }
`

export const MoreCollections = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray);
`

export const HeaderCollections = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 1rem;
`

export const ContainerCollections = styled.div`
  min-width: 25.188rem;
  display: flex;
  overflow-x: scroll;
`

export const CardCollection = styled.div`
  
  img {
    width: 13.313rem;
    height: 13.313rem;
  }
`