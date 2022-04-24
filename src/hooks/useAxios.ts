import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@constants';

axios.defaults.baseURL = BASE_URL;

interface UseAxiosReturnParams<T> {
  data?: T;
  error?: AxiosError;
  loading: boolean;
}

export const useAxios = <T>(
  axiosParams: AxiosRequestConfig
): UseAxiosReturnParams<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request({
        ...params,
        headers: {
          Authorization: import.meta.env.VITE_AUTH_API_KEY
        }
      });
      setData(result.data);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { data, error, loading };
};
