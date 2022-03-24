import { useEffect, useState } from 'react';
import { Container } from './style';
import { Subtitle } from '../Typography';
import CollectionCard from '../CollectionCard';
import Pagination from '../Pagination';
import useAxiosFetch from 'hooks/useAxiosFetch';

const MoreCollections = () => {
  const [collection, setCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage] = useState(15);
  const { data, fetchError, isLoading } = useAxiosFetch('/assets');
  useEffect(() => {
    setCollection(data);
    console.log(data?.assets);
  }, [data]);
  const collectionPagination = collection.assets;
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentDatas = collectionPagination?.slice(startIndex, endIndex);

  return (
    <Container className="margins">
      <Subtitle>More collections</Subtitle>
      <CollectionCard
        data={currentDatas}
        isLoading={isLoading}
        fetchError={fetchError}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default MoreCollections;
