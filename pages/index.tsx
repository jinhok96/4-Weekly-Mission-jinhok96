import classNames from 'classnames';
import Link from 'next/link';

import Button from '@/components/common/buttons/Button';
import styles from '@/pages/index.module.css';
import scrollToTop from '@/utils/scrollToTop';

const containerClasses = classNames(styles.container, 'flex-col', 'align-center', 'position-absolute');
const linkSharedPageButtonClasses = classNames(styles.button, 'background-red', 'text-color-white', 'border-none');
const linkFolderPageButtonClasses = classNames(styles.button, 'background-primary', 'text-color-white', 'border-none');

export default function Home() {
  return (
    <main className={containerClasses}>
      <Link href="/shared" onClick={scrollToTop}>
        <Button className={linkSharedPageButtonClasses}>SharedPage</Button>
      </Link>
      <Link href="/folder" onClick={scrollToTop}>
        <Button className={linkFolderPageButtonClasses}>FolderPage</Button>
      </Link>
    </main>
  );
}
