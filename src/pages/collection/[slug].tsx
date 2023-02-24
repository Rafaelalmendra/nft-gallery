import { useEffect, useState } from 'react';
import { NextPage } from "next/types";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

// hooks
import { useAxiosFetch } from 'hooks';

// components
import { Loading } from 'components';

// styles
import * as S from 'styles/collection/styles';

const Collection: NextPage = () => {
  const router = useRouter();
  const slugCollection = router.query.slug;

  const [collection, setCollection] = useState<any>([]);

  const { data, isLoading, fetchError } = useAxiosFetch({
    url: `/assets`,
    setCollection: slugCollection,
    setLimit: 15,
  })

  useEffect(() => {
    setCollection(data);
  }, [data]);

  return (
    <S.Container className="margin">
      <Head>
        <title>NFTCLUB | {slugCollection}</title>
      </Head>

      {isLoading && (
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      )}

      {!isLoading && !fetchError && (
        <>
          <h2>{slugCollection}</h2>

          <S.CardContainer>
            {collection.assets?.map((item) => (
              <Link
                href={`/assets/${item.asset_contract.address}/${item.token_id}`}
              >
                <a>
                  <S.Card>
                    {item.image_url === null ?
                      <S.NotImage>
                        <p>Image not found</p>
                      </S.NotImage>
                      :
                      <img src={item.image_url} alt="" />
                    }
                    <S.Informations>
                      {item.name === null ? (
                        <p>{slugCollection}</p>
                      ) : (
                        <p>{item.name}</p>
                      )}
                      <S.DateInfo>
                        <i className="material-icons-outlined">
                          calendar_today
                        </i>
                        {new Intl.DateTimeFormat('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric',
                        }).format(new Date(item.asset_contract.created_date))}
                      </S.DateInfo>
                      <div className="divider"></div>
                    </S.Informations>
                  </S.Card>
                </a>
              </Link>
            ))}
          </S.CardContainer>
        </>
      )}
    </S.Container>
  );
}

export default Collection;
