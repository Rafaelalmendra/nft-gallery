// hooks
import { useAxiosFetch } from 'hooks';

// components
import { Subtitle, CollectionCard, Pagination } from 'components';

// styles
import * as S from './styles';

const MoreCollections = () => {
  const { data, fetchError, isLoading } = useAxiosFetch({
    url: '/assets',
  });

  return (
    <S.Container className="margins">
      <Subtitle>More collections</Subtitle>

      {data.assets.length > 0 && (
        <CollectionCard
          data={data.assets}
          isLoading={isLoading}
          fetchError={fetchError}
        />
      )}
    </S.Container>
  );
};

export { MoreCollections };
