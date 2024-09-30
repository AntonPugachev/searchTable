import './Table.scss';
import { HTMLAttributes } from 'react';
import { useCountriesStore } from '../../../_store/countries.store';
export const Table = (props: HTMLAttributes<HTMLTableElement>) => {
  const countries = useCountriesStore((state) => state.filteredCountries);

  const tableBody = countries.map((item, idx) => {
    const curr: string[] = [];
    if (item.currencies) {
      for (const key in item.currencies) {
        curr.push(item.currencies[key].symbol || item.currencies[key].name);
      }
    }
    const onClickHandler = () => {
      useCountriesStore.setState({ selection: item });
    };
    return (
      <tr key={`${item.ccn3}+${idx}`} onClick={onClickHandler}>
        <td>{item.flag}</td>
        <td>{item.name.official}</td>
        <td>{item.population}</td>
        <td>{curr.join(' ,')}</td>
        <td></td>
      </tr>
    );
  });
  return (
    <table {...props} className={'table-main'}>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Currency</th>
          <th>Additional info</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};
