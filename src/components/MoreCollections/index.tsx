import { useEffect, useState } from 'react';

// hooks
import { useAxiosFetch } from 'hooks';

// components
import { Subtitle, CollectionCard, Pagination } from 'components'

// styles
import * as S from './styles';

const MoreCollections = () => {
  const [collection, setCollection] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage] = useState(15);

  const { data, fetchError, isLoading } = useAxiosFetch({
    url: '/assets',
  });

  useEffect(() => {
    setCollection(data);
  }, [data]);

  const collectionPagination = collection?.assets;
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentDatas = collectionPagination?.slice(startIndex, endIndex);

  return (
    <S.Container className="margins">
      <Subtitle>More collections</Subtitle>

      <CollectionCard
        data={currentDatas}
        isLoading={isLoading}
        fetchError={fetchError}
      />

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </S.Container>
  );
};

export { MoreCollections };
