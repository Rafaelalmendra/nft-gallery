import { useEffect, useState } from "react";
import axios from "axios";

import Cards from "./Cards";
import { Container, Pagination } from './style';

export default function MoreCollections() {
  const [ itens, setItens ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ itensPerPage ] = useState(14);
  const [ isFetching, setIsFetching ] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.opensea.io/api/v1/assets',
      params: { limit: '50' },
      headers: {Accept: 'application/json'}
    };

    axios.request(options)
      .then(function (response) {
        console.log(response.data);
        setItens(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  const collection = itens.assets;

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentDatas = collection?.slice(startIndex, endIndex);

  return (
    <Container className="margins">
      <h3>More collections</h3>
      
      <Cards data={currentDatas} isFetching={isFetching} />
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
          <i className="material-icons-outlined">
            chevron_right
          </i>
        </button>
      </Pagination>
    </Container>
  );
};