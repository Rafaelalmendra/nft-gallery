import Link from "next/link";

// mocks
import { topCollectionsImages } from "mocks";

// components
import { Subtitle } from 'components'

// styles
import * as S from './styles'
import {
  ContainerCollections,
  CardCollection,
  Informations,
} from "styles/cards";

const TopCollections = () => (
  <S.Container>
    <Subtitle>Top collections</Subtitle>

    <ContainerCollections>
      {topCollectionsImages?.map((image) => (
        <Link href={image?.link}>
          <a>
            <CardCollection>
              <img src={image?.src} alt={image?.alt} />
              <Informations>
                <p>{image?.title}</p>
                <button>View more</button>
              </Informations>
            </CardCollection>
          </a>
        </Link>
      ))}
    </ContainerCollections>
  </S.Container>
);

export { TopCollections };
