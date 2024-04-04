import classNames from 'classnames';
import React from 'react';

import Gnb from '@/components/layouts/header/gnb/Gnb';

// import styles from '@/components/layouts/header/Header.module.css';

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
