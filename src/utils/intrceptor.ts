import Axios from 'axios';
import { QueryClient } from 'react-query';
export const interceptor = () =>
  Axios.interceptors.request.use((config) => {
    return { ...config, url: `https://restcountries.com/v3.1${config.url}` };
  });
export const QueryClientInstance: QueryClient = new QueryClient();
