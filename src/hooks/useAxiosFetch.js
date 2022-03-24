import { useState, useEffect } from "react";
import api from "services/api";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isMounted = true;
    const fetchData = async (url, collection) => {
      setIsLoading(true);
      try {
        const response = await api.get(url, {
          params: {
            collection,
            limit: 50,
          },
          headers: { Accept: "application/json" },
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(dataUrl);
    const cleanUp = () => {
      console.log("clean up function");
      isMounted = false;
    };
    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
