import './App.scss';
import { useEffect } from 'react';
import { useCountriesStore } from '../../_store/countries.store';
import { interceptor } from '../../utils/intrceptor';
import { SearchInput } from '../atoms/SearchInput/SearchInput';
import { Table } from '../atoms/Table';
interceptor();

export const App = () => {
  useEffect(() => {
    useCountriesStore.getState().loadCountries();
  }, []);
  return (
    <div className={'app-wrapper'}>
      <SearchInput className={'app-search'} />
      <Table className={'app-table'} />
    </div>
  );
};
