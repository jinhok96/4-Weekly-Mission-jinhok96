import classNames from 'classnames';
import Image from 'next/image';
import React, { useContext } from 'react';

import styles from '@/components/layouts/main/searchBar/SearchBar.module.css';
import { InputStateContext } from '@/contexts/InputStateProvider';
import resetIcon from '@/public/images/close-icon-dark.svg';
import searchIcon from '@/public/images/search-icon.svg';

const containerClasses = classNames(styles['search-bar'], 'position-relative', 'width-full');
const inputClasses = classNames(styles['search-bar-input'], 'background-light', 'text-color-text', 'width-full');
const searchIconClasses = classNames(styles['search-bar-icon'], 'position-absolute');
const inputResetButtonClasses = classNames(styles['input-reset-button'], 'position-absolute');
const resetIconClasses = classNames('width-full', 'height-full');

function SearchBar() {
  const { inputState, setInputState } = useContext(InputStateContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const handleInputResetClick = () => {
    setInputState('');
  };

  return (
    <div className={containerClasses}>
      <input
        className={inputClasses}
        type="text"
        value={inputState}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요."
      />
      <Image className={searchIconClasses} src={searchIcon} alt="searchIcon" />
      {inputState !== '' && (
        <button className={inputResetButtonClasses} type="button" onClick={handleInputResetClick}>
          <Image className={resetIconClasses} src={resetIcon} alt="resetIcon" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
