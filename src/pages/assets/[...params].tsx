import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from "next/types";
import Head from 'next/head';

// hooks
import { useAxiosFetch } from 'hooks';

// components
import { CardAsset, RelatedCollections } from 'components';

// styles
import * as S from 'styles/assets/styles';

const Asset: NextPage = () => {
  const router = useRouter();
  const { params } = router.query;
  const [asset, setAsset] = useState<any>([]);

  const firstParam = params[0];
  const secondParam = params[1];

  const { data, fetchError, isLoading } = useAxiosFetch({
    url: `/asset/${firstParam}/${secondParam}`,
  })

  useEffect(() => {
    setAsset(data);
  }, [data]);

  const slugAsset = asset?.collection?.slug;

  return (
    <S.Container className="margin">
      <Head>
        <title>NFTCLUB | {asset?.name}</title>
      </Head>

      <CardAsset asset={asset} fetchError={fetchError} isLoading={isLoading} />

      <RelatedCollections slugAsset={slugAsset} />
    </S.Container>
  );
};

export default Asset;
