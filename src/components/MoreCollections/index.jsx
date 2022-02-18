import { useEffect, useState } from "react";
import axios from "axios";

import {
  Container,
  ContainerCollections,
  Pagination
} from './style';
import Cards from "./Cards";

export default function MoreCollections() {
  const [ itens, setItens ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ itensPerPage ] = useState(14);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.opensea.io/api/v1/assets',
      params: { limit: '50' },
      headers: {Accept: 'application/json'}
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setItens(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const collection = itens.assets;

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentDatas = collection?.slice(startIndex, endIndex);

  return (
    <Container className="margins">
      <h3>More Collections</h3>
      <ContainerCollections>
        <Cards data={currentDatas} />
      </ContainerCollections>

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