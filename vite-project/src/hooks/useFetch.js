import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();


    setData(null);
    setError(null);
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          const err = new Error(`Request failed with status ${response.status}`);
          err.status = response.status;
          throw err;
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return; 
        setError(err);
        setLoading(false);
      });

   
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;