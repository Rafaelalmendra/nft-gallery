/* eslint-disable @next/next/no-img-element */
import {
  Container,
  ImageAndOwner,
  Informations,
  Description,
  Header,
  Content
} from './style';

export default function AssetDetails({ asset }) {
  return (
    <Container>
      <ImageAndOwner>
        <img src={asset.image_url} alt={asset.name} />
        <p>Owned by <span>{asset.owner?.user?.username}</span></p>
      </ImageAndOwner>

      <Informations>
        {asset.name === null ? (
          <h2>Name not found</h2>
        ) : (
          <h2>{asset.name}</h2>
        )}
        <Description>
          <Header>
            <i className="material-icons-outlined">subject</i>
            <p>Description</p>
          </Header>

          <Content>
            {asset.description === null ? (
              <p>No description</p>
            ) : (
              <p>{asset.description}</p>
            )}
            <p>Created by <span>{asset.creator?.user?.username}</span></p>
          </Content>
        </Description>
        <a 
          href={asset.permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            View on Opensea
            <img src="/images/opensea.svg" alt="logo opensea" />
          </button>
        </a>
      </Informations>
    </Container>
  );
};