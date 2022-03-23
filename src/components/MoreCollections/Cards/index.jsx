import Loading from "@/components/Loading";
import Link from "next/link";
import {
  ContainerCollections,
  CardCollection,
  Informations,
} from "styles/cards";

const Cards = ({ data, loading }) => (
  <>
    {loading && <Loading />}
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
  </>
);

export default Cards;
