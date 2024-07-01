import './Table.scss';
import { HTMLAttributes } from 'react';
import { useCountriesStore } from '../../../_store/countries.store';
export const Table = (props: HTMLAttributes<HTMLTableElement>) => {
  const countries = useCountriesStore((state) => state.countries);
  const tableBody = countries.map((item) => {
    const curr: string[] = [];
    if (item.currencies) {
      for (const key in item.currencies) {
        curr.push(item.currencies[key].symbol || item.currencies[key].name);
      }
    }

    return (
      <tr className={'grid-off'} key={item.ccn3}>
        <td>{item.flag}</td>
        <td>{item.name.official}</td>
        <td>{item.population}</td>
        <td>{curr.join(' ,')}</td>
        <td></td>
      </tr>
    );
  });
  return (
    <table {...props}>
      <caption className={'hide'}>Countries</caption>
      <thead className={'table-head'}>
        <tr className={'grid-off'}>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Currency</th>
          <th>Additional info</th>
        </tr>
      </thead>
      <tbody className={'table-body'}>{tableBody}</tbody>
    </table>
  );
};
