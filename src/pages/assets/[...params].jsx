/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from "axios";

import AssetDetails from '../../components/AssetDetails';
import { Container } from '../../styles/assets/style';

export default function Asset() {
  const [ asset, setAsset ] = useState([]);
  const [ collections, setCollections ] = useState([])
  const [ isFetching, setIsFetching ] = useState(true);
  const router = useRouter();
  const { params } = router.query;

  //asset-fetching
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

  //asset-collections
  const slugAsset = asset.collection?.slug;

  useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/assets',
        params: {
          collection: slugAsset,
          limit: '15',
        },
        headers: { Accept: 'application/json' }
      };

      axios.request(options)
        .then(function (response) {
          console.log(response.data);
          setCollections(response.data);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => {
          setIsFetching(false);
        });
  }, [ slugAsset ]);

  return (
    <>
      <Head>
        <title>NFTCLUB | {asset.name}</title>
      </Head>

      <Container className="margin">
        {isFetching === true ? (
          <div className="loading">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <>
            <AssetDetails asset={asset}/>

            {/*more-from-this.collection 
              {collections.assets?.map(item => (
                <>
                  <img src={item.image_url} alt="" />
                </>
              ))}
            */}
          </>
        )}
      </Container>
    </>
  );
};