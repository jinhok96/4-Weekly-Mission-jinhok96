import classNames from 'classnames';
import Link from 'next/link';

import { ROUTE_PATHS } from 'constants/constants';

import Button from '@/components/common/buttons/Button';
import styles from '@/pages/index.module.css';
import scrollToTop from '@/utils/scrollToTop';

const containerClasses = classNames(styles.container, 'flex-col', 'align-center', 'position-absolute');
const linkSharedPageButtonClasses = classNames(styles.button, 'background-red', 'text-color-white', 'border-none');
const linkFolderPageButtonClasses = classNames(styles.button, 'background-primary', 'text-color-white', 'border-none');

export default function Home() {
  return (
    <main className={containerClasses}>
      <Link href={ROUTE_PATHS.signin} onClick={scrollToTop}>
        <Button className={linkSharedPageButtonClasses}>SignInPage</Button>
      </Link>
      <Link href={ROUTE_PATHS.signup} onClick={scrollToTop}>
        <Button className={linkSharedPageButtonClasses}>SignUpPage</Button>
      </Link>
      <Link href={ROUTE_PATHS.shared} onClick={scrollToTop}>
        <Button className={linkSharedPageButtonClasses}>SharedPage</Button>
      </Link>
      <Link href={ROUTE_PATHS.folder} onClick={scrollToTop}>
        <Button className={linkFolderPageButtonClasses}>FolderPage</Button>
      </Link>
    </main>
  );
}
