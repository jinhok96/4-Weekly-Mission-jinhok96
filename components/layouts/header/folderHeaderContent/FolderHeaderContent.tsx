import classNames from 'classnames';

import AddLinkBar from 'components/Header/AddLinkBar';
import styles from 'components/Header/FolderHeaderContent.module.css';

const contentClasses = classNames(styles['header-content'], 'margin-auto');

function FolderHeaderContent() {
  return (
    <div className={contentClasses}>
      <AddLinkBar />
    </div>
  );
}

export default FolderHeaderContent;
