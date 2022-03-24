import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Link from 'next/link';
import api from 'services/api';
import {
  ContainerCollections,
  CardCollection,
  Collections,
  HeaderCollections,
  CollectionsInformations,
  DateInfo,
} from './style';

const RelatedCollections = ({ slugAsset }) => {
  const [loading, setLoading] = useState(false);
  const [relatedCollections, setRealatedCollections] = useState([]);
  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      baseURL: api.baseURL,
      url: '/assets',
      params: {
        collection: slugAsset,
        limit: '15',
      },
      headers: { Accept: 'application/json' },
    };
    api
      .request(options)
      .then(function (response) {
        setRealatedCollections(response.data.assets);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slugAsset]);

  return (
    <Collections>
      {loading && <Loading />}
      {!loading && (
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
