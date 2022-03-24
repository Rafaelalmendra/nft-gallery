import Loading from '../Loading';
import {
  Asset,
  ImageAndOwner,
  Informations,
  Description,
  Header,
  Content,
} from './style';

const CardAsset = ({ asset, isLoading, fetchError }) => (
  <Asset>
    {isLoading && <Loading />}
    {fetchError && <p>{fetchError}</p>}
    {!isLoading && !fetchError && (
      <>
        <ImageAndOwner>
          {asset.name === null ? (
            <h2 className="mobile">
              {asset.collection.name} #{asset.token_id}
            </h2>
          ) : (
            <h2 className="mobile">{asset.name}</h2>
          )}
          <img src={asset.image_url} alt={asset.name} />
          <p>
            Owned by <span>{asset.owner?.user?.username}</span>
          </p>
        </ImageAndOwner>
        <Informations>
          {asset.name === null ? (
            <h2 className="desktop">
              {asset.collection.name} #{asset.token_id}
            </h2>
          ) : (
            <h2 className="desktop">{asset.name}</h2>
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
              <p>
                Created by <span>{asset.creator?.user?.username}</span>
              </p>
            </Content>
          </Description>
          <a href={asset.permalink} target="_blank" rel="noopener noreferrer">
            <button>
              View on Opensea
              <img src="/images/opensea.svg" alt="logo opensea" />
            </button>
          </a>
        </Informations>
      </>
    )}
  </Asset>
);

export default CardAsset;
