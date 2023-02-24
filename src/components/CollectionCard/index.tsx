import Link from 'next/link';

// components
import { Loading }  from 'components';

// styles
import {
  ContainerCollections,
  CardCollection,
  Informations,
} from 'styles/cards';

interface CollectionCardProps {
  data: any;
  isLoading: boolean;
  fetchError: string;
}

const CollectionCard = ({ data, isLoading, fetchError }: CollectionCardProps) => (
  <>
    {isLoading && <Loading />}

    {fetchError && <p>{fetchError}</p>}

    {!isLoading && !fetchError && (
      <ContainerCollections>
        {data?.map((item: any) => (
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

export { CollectionCard }
