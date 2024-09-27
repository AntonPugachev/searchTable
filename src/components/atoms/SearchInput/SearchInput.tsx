import './SearchInput.scss';
import { FormEvent, HTMLAttributes } from 'react';
import cx from 'classnames';
import { useCountriesStore } from '../../../_store/countries.store.ts';

export const SearchInput = (props: HTMLAttributes<HTMLDivElement>) => {
  const onInputHandle = (data: FormEvent<HTMLInputElement>) => {
    useCountriesStore.setState({ search: data.currentTarget.value });
  };
  return (
    <div {...props} className={cx(props.className, 'search-wrapper')}>
      <label htmlFor='search-input'></label>
      <input id={'search-input'} type='text' onInput={onInputHandle} />
    </div>
  );
};
