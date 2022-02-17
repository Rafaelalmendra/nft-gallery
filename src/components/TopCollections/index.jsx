/* eslint-disable @next/next/no-img-element */
import { images } from './images';
import { 
  Container,
  ContainerCollections,
  CardCollection,
  Informations,
} from './styles';

export default function TopCollections() {
  return (
    <Container>
      <h3>Top collections</h3>

      <ContainerCollections>
        {images.map(image => (
          <>
            <CardCollection>
              <img src={image.src} alt={image.alt} />
              <Informations>
                <p>{image.title}</p>
                <button>View more</button>
              </Informations>
            </CardCollection>
          </>
        ))}
      </ContainerCollections>
    </Container>
  );
};