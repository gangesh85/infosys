import { useState, useEffect } from 'react';
import { useLogger } from '../components/logger'

// Create custom hook data for fetching.
export const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logs, logger } = useLogger()
  const userDataURL = "http://localhost:4000/userData"

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(userDataURL);
        const result = await res.json();
        setData(result);
        logger.info(`Loading User Data ${loading}`)
      } catch (error) {
        setError(error.message)
        logger.error(error.message)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [userDataURL]);

  console.log(logs)

  return { data, loading, error };
};