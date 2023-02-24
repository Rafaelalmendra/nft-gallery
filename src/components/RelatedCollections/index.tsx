import { useEffect, useState } from 'react';
import Link from 'next/link';

// hooks
import { useAxiosFetch }  from 'hooks';

// components
import { Loading } from 'components';

// styles
import * as S from './styles';

const RelatedCollections = ({ slugAsset }) => {
  const [relatedCollections, setRealatedCollections] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch({
    url: '/assets',
    setCollection: slugAsset,
    setLimit: 15,
  });


  useEffect(() => {
    setRealatedCollections(data?.assets);
  }, [data]);

  return (
    <S.Collections>
      {isLoading && <Loading />}

      {!isLoading && !fetchError && (
        <>
          <S.HeaderCollections>
            <i className="material-icons">view_module</i>
            <p>More From This Collection</p>
          </S.HeaderCollections>

          <S.ContainerCollections>
            {relatedCollections?.map((item) => (
              <Link
                key={item?.token_id}
                href={{
                  pathname: `/assets`,
                  query: {
                    address: item.asset_contract.address,
                    id: item.token_id,
                  }
                }}
              >
                <a>
                  <S.CardCollection>
                    {item?.image_url === null ? (
                      <S.NotImage>
                        <p>Image not found</p>
                      </S.NotImage>
                    ) : (
                      <img src={item?.image_url} alt={item?.name} />
                    )}

                    <S.CollectionsInformations>
                      {item?.name === null ? (
                        <p>
                          {item?.collection?.name} # {item?.token_id}
                        </p>
                      ) : (
                        <p>{item?.name}</p>
                      )}

                      <S.DateInfo>
                        <i className="material-icons-outlined">
                          calendar_today
                        </i>
                        {new Intl.DateTimeFormat('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric',
                        }).format(new Date(item?.asset_contract?.created_date))}
                      </S.DateInfo>

                      <div className="divider"></div>
                    </S.CollectionsInformations>
                  </S.CardCollection>
                </a>
              </Link>
            ))}
          </S.ContainerCollections>
        </>
      )}
    </S.Collections>
  );
};

export { RelatedCollections };
