import classNames from 'classnames';

import AddLinkBar from '@/components/layouts/header/addLinkBar/AddLinkBar';
import styles from '@/components/layouts/header/folderHeaderContent/FolderHeaderContent.module.css';

const contentClasses = classNames(styles['header-content'], 'margin-auto');

function FolderHeaderContent() {
  return (
    <div className={contentClasses}>
      <AddLinkBar />
    </div>
  );
}

export default FolderHeaderContent;
