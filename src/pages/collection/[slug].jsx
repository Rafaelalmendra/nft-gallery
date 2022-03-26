import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Loading from '@/components/Loading';
import useAxiosFetch from 'hooks/useAxiosFetch';
import {
  Container,
  CardContainer,
  Card,
  Informations,
  DateInfo,
  LoadingContainer,
} from '../../styles/collection/style';

export default function Collection() {
  const [collection, setCollection] = useState([]);
  const router = useRouter();
  const slugCollection = router.query.slug;

  const { data, isLoading, fetchError } = useAxiosFetch(
    `/assets`,
    slugCollection,
    15
  );
  useEffect(() => {
    setCollection(data);
  }, [data]);

  return (
    <Container className="margin">
      <Head>
        <title>NFTCLUB | {slugCollection}</title>
      </Head>
      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {!isLoading && !fetchError && (
        <>
          <h2>{slugCollection}</h2>
          <CardContainer>
            {collection.assets?.map((item) => (
              <Link
                href={`/assets/${item.asset_contract.address}/${item.token_id}`}
              >
                <a>
                  <Card>
                    {item.image_url === null ? null : (
                      <img src={item.image_url} alt="" />
                    )}
                    <Informations>
                      {item.name === null ? (
                        <p>{slugCollection}</p>
                      ) : (
                        <p>{item.name}</p>
                      )}
                      <DateInfo>
                        <i className="material-icons-outlined">
                          calendar_today
                        </i>
                        {new Intl.DateTimeFormat('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric',
                        }).format(new Date(item.asset_contract.created_date))}
                      </DateInfo>
                      <div className="divider"></div>
                    </Informations>
                  </Card>
                </a>
              </Link>
            ))}
          </CardContainer>
        </>
      )}
    </Container>
  );
}
