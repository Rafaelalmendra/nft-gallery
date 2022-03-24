import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'styles/assets/style';
import Head from 'next/head';
import CardAsset from '@/components/CardAsset';
import useAxiosFetch from 'hooks/useAxiosFetch';
import RelatedCollections from '@/components/RelatedCollections';

const Asset = () => {
  const router = useRouter();
  const { params } = router.query;
  const [asset, setAsset] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch(
    `/asset/${params[0]}/${params[1]}`
  );
  useEffect(() => {
    setAsset(data);
    console.log(data);
  }, [data]);
  const slugAsset = asset.collection?.slug;

  return (
    <Container className="margin">
      <Head>
        <title>NFTCLUB | {asset.name}</title>
      </Head>
      <CardAsset asset={asset} fetchError={fetchError} isLoading={isLoading} />
      <RelatedCollections slugAsset={slugAsset} />
    </Container>
  );
};

export default Asset;
