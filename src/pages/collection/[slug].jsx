/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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

      axios.request(options).then(function (response) {
        console.log(response.data);
        setCollection(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    };
  }, [ slugCollection ]);

  return (
    <Container className="margin">
      <h2>{slugCollection}</h2>

      <CardContainer>
        {collection.assets?.map((item) => (
          <>
            <Card>
              <img src={item.image_url} alt="" />
              <Informations>
                <p>{item.name}</p>
                <DateInfo>
                  <i className="material-icons-outlined">calendar_today</i>
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(item.asset_contract.created_date)
                  )}
                </DateInfo>
                <div className="divider"></div>
              </Informations>
            </Card>
          </>
        ))}
      </CardContainer>
    </Container>
  );
};