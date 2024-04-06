import classNames from 'classnames';

import AddLinkBar from '@/components/layouts/header/addLinkBar/AddLinkBar';
import styles from '@/pages/folder/headerContent/HeaderContent.module.css';

const contentClasses = classNames(styles['header-content'], 'margin-auto');

function HeaderContent() {
  return (
    <div className={contentClasses}>
      <AddLinkBar />
    </div>
  );
}

export default HeaderContent;
