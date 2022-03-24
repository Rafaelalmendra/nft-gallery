import { Container } from './style';

const Pagination = ({ currentPage, setCurrentPage }) => (
  <Container>
    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 0}
    >
      <i className="material-icons-outlined">chevron_left</i>
    </button>
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === 3}
    >
      <i className="material-icons-outlined">chevron_right</i>
    </button>
  </Container>
);

export default Pagination;
