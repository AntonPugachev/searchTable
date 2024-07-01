import Axios from 'axios';
import type { Countries } from '../../types';
getCountriesData.id = 'getCountriesDataALL';
export async function getCountriesData(): Promise<Countries[]> {
  return Axios.get<Countries[]>('/all')
    .then(({ data }) => data)
    .catch((e: unknown) => {
      e instanceof Error ? console.error(e.message) : e;
      return [];
    });
}
