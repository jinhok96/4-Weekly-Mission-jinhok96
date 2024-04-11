import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import AsyncBoundary from '@/components/common/AsyncBoundary';
import ErrorMessage from '@/components/common/ErrorMessage';
import LoadingMessage from '@/components/common/LoadingMessage';
import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import Main from '@/components/layouts/main/Main';
import CardList from '@/components/layouts/main/card/CardList';
import SearchBar from '@/components/layouts/main/searchBar/SearchBar';
import HeaderContent from '@/pages/shared/headerContent/HeaderContent';
import styles from '@/pages/shared/index.module.css';
import selectParticle from '@/utils/selectPostposition';

const containerClasses = classNames('min-height-100vh');
const searchResultTitleClasses = classNames(styles['search-result-title'], 'text-color-gray60');

function Shared() {
  const [inputState, setInputState] = useState('');
  const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const handleInputResetClick = () => {
    setInputState('');
  };

  useEffect(() => {
    if (inputState) {
      setIsSearchResultVisible(true);
    } else {
      setIsSearchResultVisible(false);
    }
  }, [inputState]);

  return (
    <AsyncBoundary>
      <div className={containerClasses}>
        <Header>
          <AsyncBoundary errorFallback={<ErrorMessage message="Error" />} loadingFallback={<LoadingMessage />}>
            <HeaderContent />
          </AsyncBoundary>
        </Header>
        <Main>
          <SearchBar value={inputState} onChange={handleInputChange} onInputReset={handleInputResetClick} />
          {isSearchResultVisible && (
            <p className={searchResultTitleClasses}>
              <span className="text-color-gray100">{inputState}</span>
              {selectParticle(inputState)} 검색한 결과입니다.
            </p>
          )}
          <CardList folderId={0} filter={inputState} />
        </Main>
      </div>
      <Footer />
    </AsyncBoundary>
  );
}

export default Shared;
