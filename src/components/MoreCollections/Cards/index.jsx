/* eslint-disable @next/next/no-img-element */
import {
  CardCollection,
  Informations
} from '../style';

export default function Cards({ data }) {
  return (
    <>
      {data?.map((item) => (
        <>
          {item.image_url === null ? (
            null              
          ) : (
            <CardCollection key={item.slug}>
              <img src={item.image_url} alt={item.name} />
              <Informations>
                <p>{item.name}</p>
                <button>View more</button>
              </Informations>
            </CardCollection>
          )}
        </>
      ))}
    </>
  );
};