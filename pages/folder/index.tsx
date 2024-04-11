import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

import AsyncBoundary from '@/components/common/AsyncBoundary';
import ErrorMessage from '@/components/common/ErrorMessage';
import LoadingMessage from '@/components/common/LoadingMessage';
import FloatingAddFolderButton from '@/components/common/buttons/FloatingAddFolderButton';
import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import AddLinkBar from '@/components/layouts/header/addLinkBar/AddLinkBar';
import Main from '@/components/layouts/main/Main';
import CardList from '@/components/layouts/main/card/CardList';
import SearchBar from '@/components/layouts/main/searchBar/SearchBar';
import SortingSection from '@/components/layouts/main/sortingSection/SortingSection';
import { ALL_DEFAULT_DATA } from '@/constants/constants';
import { modalList } from '@/contexts/Modal';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useModal from '@/hooks/useModal';
import HeaderContent from '@/pages/folder/headerContent/HeaderContent';
import styles from '@/pages/folder/index.module.css';
import selectParticle from '@/utils/selectPostposition';

const searchResultTitleClasses = classNames(styles['search-result-title'], 'text-color-gray60');
const floatingAddFolderButtonClasses = classNames(
  styles['floating-add-folder-button'],
  'position-fixed',
  'visible-flex-mobile-only',
  'z-top'
);
const containerClasses = classNames('min-height-100vh');
const bottomAddLinkBarClasses = classNames(
  styles['bottom-add-link-bar'],
  'display-inline-flex',
  'position-fixed',
  'z-top',
  'background-bg',
  'width-full'
);

function Folder() {
  const [inputState, setInputState] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(ALL_DEFAULT_DATA);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);
  const { openModal } = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const handleInputResetClick = () => {
    setInputState('');
  };

  const checkVisible = useCallback((setVisible: React.Dispatch<React.SetStateAction<boolean>>, isVisible: boolean) => {
    return () => setVisible(isVisible);
  }, []);

  const headerObservationTargetRef = useIntersectionObserver({
    callbackIn: checkVisible(setIsHeaderVisible, true),
    callbackOut: checkVisible(setIsHeaderVisible, false),
  });
  const footerObservationTargetRef = useIntersectionObserver({
    callbackIn: checkVisible(setIsFooterVisible, true),
    callbackOut: checkVisible(setIsFooterVisible, false),
  });

  const handleAddFolderButtonClick = () => {
    console.log('AddForderModal');

    const handleAddFolder = () => {
      console.log('handleAddFolder');
    };

    openModal(modalList.AddForderModal, { onSubmit: handleAddFolder });
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
        <div ref={headerObservationTargetRef}>
          <Header>
            <HeaderContent />
          </Header>
        </div>
        <Main>
          <SearchBar value={inputState} onChange={handleInputChange} onInputReset={handleInputResetClick} />
          {isSearchResultVisible && (
            <p className={searchResultTitleClasses}>
              <span className="text-color-gray100">{inputState}</span>
              {selectParticle(inputState)} 검색한 결과입니다.
            </p>
          )}
          <AsyncBoundary>
            <SortingSection selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
          </AsyncBoundary>
          <AsyncBoundary
            errorFallback={<ErrorMessage message="링크를 가져오지 못했습니다." />}
            loadingFallback={<LoadingMessage />}
          >
            <CardList folderId={selectedFolder.id} filter={inputState} />
          </AsyncBoundary>
          <FloatingAddFolderButton className={floatingAddFolderButtonClasses} onClick={handleAddFolderButtonClick} />
        </Main>
      </div>
      {!isHeaderVisible && !isFooterVisible && (
        <section className={bottomAddLinkBarClasses}>
          <AddLinkBar />
        </section>
      )}
      <div ref={footerObservationTargetRef}>
        <Footer />
      </div>
    </AsyncBoundary>
  );
}

export default Folder;
