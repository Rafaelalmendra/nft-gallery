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
          ) : item.image_url === null ? (
            null
          ) : (
            <Link href={`/collection/${item.collection.slug}`}>
              <a>
                <CardCollection>
                  <img src={item.collection.image_url} alt={item.name} />
                  <Informations>
                    <p>{item.collection.name}</p>
                      <button>View more</button>
                  </Informations>
                </CardCollection>
              </a>
            </Link>
          )}
        </>
      ))}
    </>
  );
};