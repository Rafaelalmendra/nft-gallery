import { useEffect, useState } from 'react';
import useAxiosFetch from 'hooks/useAxiosFetch';
import Loading from '../Loading';
import Link from 'next/link';
import {
  ContainerCollections,
  CardCollection,
  Collections,
  HeaderCollections,
  CollectionsInformations,
  DateInfo,
} from './style';

const RelatedCollections = ({ slugAsset }) => {
  const [relatedCollections, setRealatedCollections] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch(
    '/assets',
    slugAsset,
    15
  );
  useEffect(() => {
    setRealatedCollections(data.assets);
  }, [data]);

  return (
    <Collections>
      {isLoading && <Loading />}
      {!isLoading && !fetchError && (
        <>
          <HeaderCollections>
            <i className="material-icons">view_module</i>
            <p>More From This Collection</p>
          </HeaderCollections>
          <ContainerCollections>
            {relatedCollections?.map((item) => (
              <Link
                href={`/assets/${item.asset_contract.address}/${item.token_id}`}
                key={item.token_id}
              >
                <a>
                  <CardCollection>
                    <img src={item.image_url} alt={item.name} />
                    <CollectionsInformations>
                      {item.name === null ? (
                        <p>
                          {item.collection.name} #{item.token_id}
                        </p>
                      ) : (
                        <p>{item.name}</p>
                      )}
                      <DateInfo>
                        <i className="material-icons-outlined">
                          calendar_today
                        </i>
                        {new Intl.DateTimeFormat('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric',
                        }).format(new Date(item.asset_contract.created_date))}
                      </DateInfo>
                      <div className="divider"></div>
                    </CollectionsInformations>
                  </CardCollection>
                </a>
              </Link>
            ))}
          </ContainerCollections>
        </>
      )}
    </Collections>
  );
};

export default RelatedCollections;
