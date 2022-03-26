import { useState, useEffect } from 'react';
import api from 'services/api';

const useAxiosFetch = (url, setCollection, setLimit) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (url, setCollection, setLimit) => {
      setIsLoading(true);
      try {
        const response = await api.request({
          method: 'GET',
          url,
          params: { collection: setCollection, limit: setLimit },
        });
        if (response.status === 200) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (error.response) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(url, setCollection, setLimit);
  }, [url, setCollection, setLimit]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
