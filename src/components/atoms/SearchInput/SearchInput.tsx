import './SearchInput.scss';
import { HTMLAttributes } from 'react';
import cx from 'classnames';

export const SearchInput = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cx(props.className, 'search-wrapper')}>
      <label htmlFor='search-input'></label>
      <input id={'search-input'} type='text' />
    </div>
  );
};
