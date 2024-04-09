/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import React from 'react';

import styles from '@/components/layouts/main/searchBar/SearchBar.module.css';
import { ReactComponent as ResetSvg } from '@/public/images/close-icon-dark.svg';
import { ReactComponent as SearchIconSvg } from '@/public/images/search-icon.svg';

const containerClasses = classNames(styles['search-bar'], 'position-relative', 'width-full');
const inputClasses = classNames(styles['search-bar-input'], 'background-light', 'text-color-text', 'width-full');
const searchIconClasses = classNames(styles['search-bar-icon'], 'position-absolute');
const inputResetButtonClasses = classNames(styles['input-reset-button'], 'position-absolute');
const resetIconClasses = classNames('width-full', 'height-full');

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onInputReset: () => void;
}

function SearchBar({ value, onChange, onInputReset }: SearchBarProps) {
  return (
    <div className={containerClasses}>
      <input
        className={inputClasses}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="링크를 검색해 보세요."
      />
      <SearchIconSvg className={searchIconClasses} />
      {value !== '' && (
        <button className={inputResetButtonClasses} type="button" onClick={onInputReset}>
          <ResetSvg className={resetIconClasses} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
