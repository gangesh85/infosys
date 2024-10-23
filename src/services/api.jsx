import { useState, useEffect } from 'react';

// Create custom hook data for fetching.
export const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userDataURL = "http://localhost:4000/userData"

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(userDataURL);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userDataURL]);

  return { data, loading, error };
};