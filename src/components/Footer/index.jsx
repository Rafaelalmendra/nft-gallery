import { Container } from './style';

export default function Footer() {
  return (
    <Container>
      {/*footer*/}
      <p>
        Developed by 
        <a 
          target="_blank" 
          href="https://rafaelalmendra.com"
          rel="noopener noreferrer"
        >
          <span>Rafael Almendra</span>
        </a>
      </p>
    </Container>
  );
};