import { useEffect, useState } from "react";
import { Container, Pagination } from "./style";
import { Subtitle } from "../Typography";
import Cards from "./Cards";
import api from "services/api";

const MoreCollections = () => {
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage] = useState(14);
  useEffect(() => {
    const options = {
      method: "GET",
      baseURL: api.baseURL,
      url: "/assets",
      params: { limit: "50" },
      headers: { Accept: "application/json" },
    };
    api
      .request(options)
      .then(function (response) {
        setCollection(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const collectionPagination = collection.assets;
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentDatas = collectionPagination?.slice(startIndex, endIndex);

  return (
    <Container className="margins">
      <Subtitle>More collections</Subtitle>
      <Cards data={currentDatas} loading={loading} />
      <Pagination>
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
      </Pagination>
    </Container>
  );
};

export default MoreCollections;
