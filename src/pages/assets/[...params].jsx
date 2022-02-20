import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
    
    axios.request(options).then(function (response) {
      setAsset(response.data);
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [ params]);

  return (
    <Container>
      <h2>{asset.name}</h2>
      <h1>teste</h1>
    </Container>
  );
};