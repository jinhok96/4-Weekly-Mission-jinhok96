import classNames from 'classnames';

import AsyncBoundary from '@/components/common/AsyncBoundary';
import ErrorMessage from '@/components/common/ErrorMessage';
import LoadingMessage from '@/components/common/LoadingMessage';
import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import Main from '@/components/layouts/main/Main';
import CardList from '@/components/layouts/main/card/CardList';
import SearchBar from '@/components/layouts/main/searchBar/SearchBar';
import HeaderContent from '@/pages/shared/headerContent/HeaderContent';

// import styles from '@/pages/SharedPage/SharedPage.module.css';

const containerClasses = classNames('min-height-100vh');

function Shared() {
  return (
    <div>
      <div className={containerClasses}>
        <Header>
          <AsyncBoundary errorFallback={<ErrorMessage message="Error" />} loadingFallback={<LoadingMessage />}>
            <HeaderContent />
          </AsyncBoundary>
        </Header>
        <Main>
          <SearchBar />
          <CardList />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default Shared;
