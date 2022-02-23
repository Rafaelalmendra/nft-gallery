/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from "axios";

import {
  Container,
  CardContainer,
  Card,
  Informations,
  DateInfo
} from '../../styles/collection/style';

export default function Collection() {
  const [ collection, setCollection ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);
  const router = useRouter();
  const slugCollection = router.query.slug;

  useEffect(() => {
    if (slugCollection) {
      const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/assets',
        params: {
          collection: slugCollection,
          limit: '40',
        },
        headers: { Accept: 'application/json' }
      };

      axios.request(options)
        .then(function (response) {
          setCollection(response.data);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    };
  }, [ slugCollection ]);

  return (
    <>
      <Head>
        <title>NFTCLUB | {slugCollection}</title>
      </Head>
      <Container className="margin">
        <h2>{slugCollection}</h2>

        {isFetching && (
          <div className="loading">
            <div className="lds-dual-ring"></div>
          </div>
        )}
        
        <CardContainer>
          {collection.assets?.map((item) => (
            <>
              <Link href={`/assets/${item.asset_contract.address}/${item.token_id}`}>
                <a>
                  <Card>
                    {item.image_url === null ? (
                      null
                    ) : (
                      <img src={item.image_url} alt="" />
                    )}
                    <Informations>
                      {item.name === null ? (
                        <p>{slugCollection}</p>
                      ) : (
                        <p>{item.name}</p>
                      )}
                      <DateInfo>
                        <i className="material-icons-outlined">calendar_today</i>
                        {new Intl.DateTimeFormat('en-US').format(
                          new Date(item.asset_contract.created_date)
                        )}
                      </DateInfo>
                      <div className="divider"></div>
                    </Informations>
                  </Card>
                </a>
              </Link>
            </>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};