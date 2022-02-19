/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ContainerCollections, CardCollection, Informations } from '../../../styles/cards';

export default function Cards({ data, isFetching }) {
  return (
    <>
      { isFetching && (
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      )}
      <ContainerCollections>
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
      </ContainerCollections>
    </>
  );
};