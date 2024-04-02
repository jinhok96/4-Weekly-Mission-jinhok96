import classNames from 'classnames';
import React, { useContext } from 'react';

import styles from '@/components/layouts/main/searchBar/SearchBar.module.css';
import { InputStateContext } from '@/contexts/InputStateProvider';
import ResetSVG from '@/public/images/close-icon-dark.svg';
import SearchIconSVG from '@/public/images/search-icon.svg';

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
      <SearchIconSVG className={searchIconClasses} />
      {inputState !== '' && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button className={inputResetButtonClasses} type="button" onClick={handleInputResetClick}>
          <ResetSVG className={resetIconClasses} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
