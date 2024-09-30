import type { Countries } from '../types';
import { QueryClientInstance } from '../utils/intrceptor';
import { getCountriesData } from './getCountriesData/getCountriesData';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

interface ICountriesStore {
  selection?: Countries;
  countries: Countries[];
  loadCountries: () => void;
  search: string;
  filteredCountries: Countries[];
}

export const useCountriesStore = createWithEqualityFn(
  devtools(
    persist(
      subscribeWithSelector<ICountriesStore>((setState) => ({
        countries: [],
        filteredCountries: [],
        search: '',
        selection: undefined,
        loadCountries: async () => {
          const data = await QueryClientInstance?.fetchQuery([getCountriesData.id], getCountriesData);
          setState({ countries: data });
        },
      })),
      { name: 'useCountriesStoreLocalStorage' },
    ),
    { name: 'useCountriesStore' },
  ),
);
