import { useState, useEffect } from 'react';

import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets').then(response => {
      setData(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
      {data.assets?.map(({ id, external_link, name, image_preview_url}) => (
        <div key={id}>
          <img src={image_preview_url} alt={name} />
          <a href={external_link}>{name}</a>
        </div>
      ))}
    </>
  );
};