import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// hooks
import { useAxiosFetch } from 'hooks';

// components
import { CardAsset, RelatedCollections } from 'components';

// styles
import * as S from 'styles/assets/styles';

const Asset = () => {
  const router = useRouter();
  const [asset, setAsset] = useState<any>([]);

  const { address, id } = router.query;

  const { data, fetchError, isLoading } = useAxiosFetch({
    url: `/asset/${address}/${id}`,
  });

  useEffect(() => {
    setAsset(data);
  }, [data]);

  const slugAsset = asset.collection?.slug;

  return (
    <S.Container className="margin">
      <Head>
        <title>
          NFTCLUB | {asset.name ? asset.name : asset.collection?.name}
        </title>
      </Head>

      {asset && (
        <CardAsset
          asset={asset}
          fetchError={fetchError}
          isLoading={isLoading}
        />
      )}

      {slugAsset && <RelatedCollections slugAsset={slugAsset} />}
    </S.Container>
  );
};

export default Asset;
