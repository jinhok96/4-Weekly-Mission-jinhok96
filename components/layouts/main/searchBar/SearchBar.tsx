import classNames from 'classnames';
import React, { useContext } from 'react';

import styles from '@/components/layouts/main/searchBar/SearchBar.module.css';
import { InputStateContext } from '@/contexts/InputStateProvider';
import { ReactComponent as ResetSvg } from '@/public/images/close-icon-dark.svg';
import SearchIconSvg from '@/public/images/search-icon.svg';

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
      <SearchIconSvg className={searchIconClasses} />
      {inputState !== '' && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button className={inputResetButtonClasses} type="button" onClick={handleInputResetClick}>
          <ResetSvg className={resetIconClasses} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
