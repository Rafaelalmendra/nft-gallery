import Link from 'next/link';

// components
import { Loading } from 'components';

// styles
import {
  ContainerCollections,
  CardCollection,
  Informations,
  NotImage,
} from 'styles/cards';

interface CollectionCardProps {
  data: any[];
  isLoading: boolean;
  fetchError: string;
}

const CollectionCard = ({
  data,
  isLoading,
  fetchError,
}: CollectionCardProps) => (
  <>
    {isLoading && <Loading />}

    {fetchError && <p>{fetchError}</p>}

    {!isLoading && !fetchError && (
      <ContainerCollections>
        {data.map((item) => (
          <Link href={`/collection/${item.collection?.slug}`}>
            <a>
              <CardCollection>
                {item.collection?.image_url === null && (
                  <NotImage>
                    <p>Image not found</p>
                  </NotImage>
                )}

                {item.collection?.image_url !== null && (
                  <img src={item.collection?.image_url} alt={item.name} />
                )}

                <Informations>
                  <p>{item.collection?.name}</p>
                  <button>View more</button>
                </Informations>
              </CardCollection>
            </a>
          </Link>
        ))}
      </ContainerCollections>
    )}
  </>
);

export { CollectionCard };
