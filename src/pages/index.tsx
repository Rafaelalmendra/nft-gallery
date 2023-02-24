import Head from "next/head";
import { NextPage } from "next/types";

// components
import { Slide, TopCollections, MoreCollections } from 'components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFTCLUB | Home</title>
      </Head>

      <Slide />

      <div className="margin">
        <TopCollections />
        <MoreCollections />
      </div>
    </>
  );
}

export default Home;
