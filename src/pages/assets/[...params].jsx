/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from "axios";

import {
  Container
} from '../../styles/assets/style';

export default function Asset() {
  const [ asset, setAsset ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);
  const router = useRouter();
  const { params } = router.query;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.opensea.io/api/v1/asset/${params[0]}/${params[1]}`,
      headers: { Accept: 'application/json' }
    };
    
    axios.request(options)
      .then(function (response) {
        setAsset(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }, [ params ]);

  return (
    <>
      <Head>
        <title>NFTCLUB | {asset.name}</title>
      </Head>

      <Container>
        {isFetching && (
          <div className="loading">
            <div className="lds-dual-ring"></div>
          </div>
        )}

        <h2>{asset.name}</h2>
        <h1>teste</h1>
      </Container>
    </>
  );
};