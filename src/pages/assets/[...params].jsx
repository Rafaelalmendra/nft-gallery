import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loading from "@/components/Loading";
import api from "services/api";
import CardAsset from "@/components/CardAsset";
import RelatedCollections from "@/components/RelatedCollections";
import { Container } from "styles/assets/style";

const Asset = () => {
  const router = useRouter();
  const { params } = router.query;
  const [asset, setAsset] = useState([]);
  const [relatedCollections, setRealatedCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const options = {
      method: "GET",
      baseURL: api.baseURL,
      url: `/asset/${params[0]}/${params[1]}`,
      headers: { Accept: "application/json" },
    };
    api
      .request(options)
      .then(function (response) {
        setAsset(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);
  const slugAsset = asset.collection?.slug;
  useEffect(() => {
    const options = {
      method: "GET",
      baseURL: api.baseURL,
      url: "/assets",
      params: {
        collection: slugAsset,
        limit: "15",
      },
      headers: { Accept: "application/json" },
    };
    api
      .request(options)
      .then(function (response) {
        setRealatedCollections(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slugAsset]);

  return (
    <Container className="margin">
      <Head>
        <title>NFTCLUB | {asset.name}</title>
      </Head>
      {loading && <Loading />}
      <CardAsset asset={asset} />
      {loading && <Loading />}
      <RelatedCollections relatedCollections={relatedCollections} />
    </Container>
  );
};

export default Asset;
