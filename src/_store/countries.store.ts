import { create } from 'zustand';

import type { Countries } from '../types';
import { QueryClientInstance } from '../utils/intrceptor';
import { getCountriesData } from './getCountriesData/getCountriesData';
interface ICountriesStore {
  countries: Countries[];
  loadCountries: () => void;
}

export const useCountriesStore = create<ICountriesStore>((setState) => ({
  countries: [],
  loadCountries: async () => {
    const data = await QueryClientInstance?.fetchQuery([getCountriesData.id], getCountriesData);
    setState({ countries: data });
  },
}));
