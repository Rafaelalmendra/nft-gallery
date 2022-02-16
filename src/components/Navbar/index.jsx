import {
  Container,
  Nav
} from './styles';

export default function Navbar() {
  return (
    <Container>
      <Nav className="margin">
        <h1>NFT<span>CLUB</span></h1>
        <h2>Welcome <span>Rafael</span></h2>
        <i className="material-icons-outlined">light_mode</i>
        {/*<i className="material-icons-outlined">nightlight</i>*/}
      </Nav>
    </Container>
  );
};