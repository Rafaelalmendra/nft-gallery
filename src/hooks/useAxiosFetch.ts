import { useState, useEffect } from 'react';

// services
import { api }  from 'services';

interface UseAxiosFetchProps {
  url: string;
  setCollection?: any;
  setLimit?: number;
}

const useAxiosFetch = ({ url, setCollection, setLimit}: UseAxiosFetchProps) => {
  const [data, setData] = useState<any>([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async ({ url, setCollection, setLimit}: UseAxiosFetchProps) => {
      setIsLoading(true);

      try {
        const response = await api.request({
          method: 'GET',
          url,
          params: { collection: setCollection, limit: setLimit },
        });

        if (response.status === 200) {
          setData(response?.data);
          setFetchError(null);
        }
      } catch (error) {
        if (error?.response) {
          setFetchError(error?.message);
          setData([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData({ url, setCollection, setLimit });
  }, [url, setCollection, setLimit]);

  return { data, fetchError, isLoading };
};

export { useAxiosFetch };
