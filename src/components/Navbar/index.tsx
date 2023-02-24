import Link from "next/link";

// styles
import * as S from './styles'

const Navbar = ({ toggleTheme, isDarkTheme }) => (
  <S.Container>
    <S.Nav className="margin">
      <Link href="/">
        <a>
          <h1>
            NFT<span>CLUB</span>
          </h1>
        </a>
      </Link>

      <div onClick={toggleTheme}>
        {isDarkTheme ? (
          <i className="material-icons-outlined">light_mode</i>
        ) : (
          <i className="material-icons-outlined">nightlight</i>
        )}
      </div>
    </S.Nav>
  </S.Container>
);

export { Navbar };
