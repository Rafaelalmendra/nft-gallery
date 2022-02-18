/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from "axios";

import {
  Container,

} from '../../styles/collection';

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
      }

      axios.request(options).then(function (response) {
        console.log(response.data);
        setCollection(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, [ slugCollection ]);

  return (
    <Container>
      <p>{slugCollection}</p>
      {collection.assets?.map((item) => (
        <>
          <img src={item.image_url} alt="" />
          <p>{router.query.slug}</p>
          <p>{item.id}</p>
        </>
      ))}
    </Container>
  );
};