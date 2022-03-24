import Link from 'next/link';
import Loading from '@/components/Loading';
import {
  ContainerCollections,
  CardCollection,
  Informations,
} from 'styles/cards';

const CollectionCard = ({ data, isLoading, fetchError }) => (
  <>
    {isLoading && <Loading />}
    {fetchError && <p>{fetchError}</p>}
    {!isLoading && !fetchError && (
      <ContainerCollections>
        {data?.map((item) => (
          <>
            {item.collection.image_url === null ? null : item.image_url ===
              null ? null : (
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
    )}
  </>
);

export default CollectionCard;
