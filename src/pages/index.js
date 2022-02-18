import Head from "next/head";
import MoreCollections from "../components/MoreCollections";

import Slide from "../components/Slide";
import TopCollections from "../components/TopCollections";
import { Container } from '../styles/home/style';

export default function Home() {
  return (
    <>
      <Head>
        <title>NFTCLUB | Home</title>
      </Head>
      <Slide />

      <Container className="margin">
        <TopCollections />
        <MoreCollections />
      </Container>
    </>
  );
};