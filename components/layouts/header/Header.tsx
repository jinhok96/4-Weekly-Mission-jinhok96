import classNames from 'classnames';
import React from 'react';

import Gnb from 'components/Header/Gnb';
// import styles from 'components/Header/Header.module.css';

const headerClasses = classNames('background-bg', 'width-full');

interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className={headerClasses}>
      <Gnb />
      {children}
    </header>
  );
}

export default Header;
