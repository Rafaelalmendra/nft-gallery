import Link from "next/link";
import { Subtitle } from "../Typography";
import { images } from "./images";
import { Container } from "./styles";
import {
  ContainerCollections,
  CardCollection,
  Informations,
} from "../../styles/cards";

const TopCollections = () => (
  <Container>
    <Subtitle>Top collections</Subtitle>
    <ContainerCollections>
      {images.map((image) => (
        <Link href={image.link}>
          <a>
            <CardCollection>
              <img src={image.src} alt={image.alt} />
              <Informations>
                <p>{image.title}</p>
                <button>View more</button>
              </Informations>
            </CardCollection>
          </a>
        </Link>
      ))}
    </ContainerCollections>
  </Container>
);

export default TopCollections;
