/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { images } from './images';
import { Container } from './styles';
import { 
  ContainerCollections,
  CardCollection,
  Informations,
} from '../../styles/cards';

export default function TopCollections() {
  return (
    <Container>
      <h3>Top collections</h3>

      <ContainerCollections>
        {images.map(image => (
          <> 
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
          </>
        ))}
      </ContainerCollections>
    </Container>
  );
};