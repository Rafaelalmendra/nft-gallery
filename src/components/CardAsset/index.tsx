// components
import { Loading } from 'components';

// styles
import * as S from './styles';

const CardAsset = ({ asset, isLoading, fetchError }) => (
  <S.Asset>
    {isLoading && <Loading />}

    {fetchError && <p>{fetchError}</p>}

    {!isLoading && !fetchError && (
      <>
        <S.ImageAndOwner>
          {asset?.name === null ? (
            <h2 className="mobile">
              {asset?.collection?.name} #{asset?.token_id}
            </h2>
          ) : (
            <h2 className="mobile">{asset.name}</h2>
          )}
          <img src={asset?.image_url} alt={asset?.name} />
          {asset?.owner?.user?.username && (
            <p>Owned by <span>{asset?.owner?.user?.username}</span></p>
          )}
        </S.ImageAndOwner>

        <S.Informations>
          {asset?.name === null ? (
            <h2 className="desktop">
              {asset?.collection?.name} #{asset?.token_id}
            </h2>
          ) : (
            <h2 className="desktop">{asset?.name}</h2>
          )}

          <S.Description>
            <S.Header>
              <i className="material-icons-outlined">subject</i>
              <p>Description</p>
            </S.Header>

            <S.Content>
              {asset?.description === null ? (
                <p>No description</p>
              ) : (
                <p>{asset?.description}</p>
              )}
              <p>
                Created by <span>{asset?.creator?.user?.username}</span>
              </p>
            </S.Content>
          </S.Description>

          <a href={asset?.permalink} target="_blank" rel="noopener noreferrer">
            <button>
              View on Opensea
              <img src="/images/opensea.svg" alt="logo opensea" />
            </button>
          </a>
        </S.Informations>
      </>
    )}
  </S.Asset>
)

export { CardAsset }
