/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  CardCollection,
  Informations
} from '../style';

export default function Cards({ data }) {
  return (
    <>
      {data?.map((item) => (
        <>
          {item.collection.image_url === null ? (
            null
          ) : (
            <CardCollection>
              <img src={item.collection.image_url} alt={item.name} />
              <Informations>
                <p>{item.collection.name}</p>
                <Link href={`/assets/${item.collection.slug}`}>
                  <a><button>View more</button></a>
                </Link>
              </Informations>
            </CardCollection>
          )}
        </>
      ))}
    </>
  );
};