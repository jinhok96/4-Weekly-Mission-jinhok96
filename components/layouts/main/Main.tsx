import classNames from 'classnames';
import React from 'react';

import styles from '@/components/layouts/main/Main.module.css';

const mainClasses = classNames(styles.main, 'width-full');
const mainContainerClasses = classNames(styles['main-container'], 'margin-auto');

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main className={mainClasses}>
      <div className={mainContainerClasses}>{children}</div>
    </main>
  );
}

export default Main;
