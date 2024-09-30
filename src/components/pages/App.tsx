import './App.scss';
import { useEffect } from 'react';
import { useCountriesStore } from '../../_store/countries.store';
import { interceptor } from '../../utils/intrceptor';
import { SearchInput } from '../atoms/SearchInput/SearchInput';
import { Table } from '../atoms/Table';
import { shallow } from 'zustand/shallow';
interceptor();

export const App = () => {
  useEffect(() => {
    useCountriesStore.getState().loadCountries();

    const unsubscribe = useCountriesStore.subscribe(
      (state) => ({ search: state.search, countries: state.countries }),
      ({ search, countries }) => {
        useCountriesStore.setState({
          filteredCountries: countries.filter((item) => {
            if (!search) return true;
            return item.name.official.toLowerCase().includes(search.toLowerCase());
          }),
        });
      },
      { equalityFn: shallow },
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className={'app-wrapper'}>
      <SearchInput className={'app-search'} />
      <Table className={'app-table'} />
    </div>
  );
};
