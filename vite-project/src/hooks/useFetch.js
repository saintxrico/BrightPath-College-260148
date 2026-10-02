import { useState, useEffect } from "react";


function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }
    let ignore = false;

    async function loadData() {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(url);

       
        if (!response.ok) {
          const err = new Error(`Request failed with status ${response.status}`);
          err.status = response.status;
          throw err;
        }

        const json = await response.json();
        if (!ignore) setData(json);
      } catch (err) {
       
        if (!ignore) setError({ message: err.message, status: err.status || null });
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, [url]); 

  return { data, loading, error };
}

export default useFetch;