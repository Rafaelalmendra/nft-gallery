import Link from 'next/link';
import { Container, Nav } from './styles';

export default function Navbar({ toggleTheme, isDarkTheme }) {

  return (
    <Container>
      <Nav className="margin">
        <Link href="/">
          <a><h1>NFT<span>CLUB</span></h1></a>
        </Link>
        <h2>Welcome <span>Rafael</span></h2>
        <div onClick={toggleTheme}>
          {isDarkTheme ? 
            <i className="material-icons-outlined"> light_mode</i>
          : 
            <i className="material-icons-outlined">nightlight</i>
          }
        </div>
      </Nav>
    </Container>
  );
};