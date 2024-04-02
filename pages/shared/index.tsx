import classNames from 'classnames';

import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import SharedHeaderContent from '@/components/layouts/header/sharedHeaderContent/SharedHeaderContent';
import Main from '@/components/layouts/main/Main';
import CardList from '@/components/layouts/main/card/CardList';
import SearchBar from '@/components/layouts/main/searchBar/SearchBar';

// import styles from '@/pages/SharedPage/SharedPage.module.css';

const containerClasses = classNames('min-height-100vh');

function Shared() {
  return (
    <div>
      <div className={containerClasses}>
        <Header>
          <SharedHeaderContent />
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
