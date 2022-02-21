/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from "axios";

import {
  Container,
  AssetContainer,
  ImageAndOwner,
  Informations,
  Description,
  Header,
  Content,
  ContainerCollections,
  CardCollection,
  MoreCollections,
  HeaderCollections
} from '../../styles/assets/style';

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
          <AssetContainer>
            <ImageAndOwner>
              <img src={asset.image_url} alt={asset.name} />
              <p>Owned by <span>{asset.owner?.user?.username}</span></p>
            </ImageAndOwner>

            <Informations>
              {asset.name === null ? (
                <h2>Name not found</h2>
              ) : (
                <h2>{asset.name}</h2>
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
                  <p>Created by <span>{asset.creator?.user?.username}</span></p>
                </Content>
              </Description>
              <a 
                href={asset.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  View on Opensea
                  <img src="/images/opensea.svg" alt="logo opensea" />
                </button>
              </a>
            </Informations>
          </AssetContainer>
          
          <MoreCollections>
            <HeaderCollections>
              <p>More From This Collection</p>
            </HeaderCollections>

            <ContainerCollections>
              {collections.assets?.map(item => (
                <>
                  <CardCollection>
                    <img src={item.image_url} alt="" />
                  </CardCollection>
                </>
              ))}
            </ContainerCollections>
          </MoreCollections>
        </>
        )}
      </Container>
    </>
  );
};