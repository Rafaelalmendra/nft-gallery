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
  gap: 2.625rem;
  margin-top: 10rem;

  @media (max-width: 991.98px) {
    
  }
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

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2; 
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export const MoreCollections = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding-bottom: 0.5rem;
  
  font-family: 'Poppins', sans-serif;
  border: 1px solid var(--gray);
  border-radius: 4px;
`

export const HeaderCollections = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 1rem;
  gap: 0.688rem;

  i {
    padding-left: 1.313rem;
  }
`

export const ContainerCollections = styled.div`
  min-width: 25.188rem;
  height: 21rem;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`

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
`

export const CollectionsInformations = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 400;

  .divider {
    width: 100%;
    border: 1px solid;
    opacity: 0.8;
    margin-top: 0.4rem;
  }
`

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 400;

  i {
    font-size: 0.9rem;
  }
`