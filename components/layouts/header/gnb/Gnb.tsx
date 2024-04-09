import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

import { LOADING_MESSAGE, ROUTE_PATHS } from 'constants/constants';
import scrollToTop from 'utils/scrollToTop';

import ErrorMessage from '@/components/common/ErrorMessage';
import styles from '@/components/layouts/header/gnb/Gnb.module.css';
import logoSvgUrl from '@/public/images/logo.svg';

import UserProfile from './UserProfile';

const containerClasses = classNames('flex-row', 'align-center', 'justify-space-between');
const logoClasses = classNames(styles['gnb-logo'], 'position-relative');

// 글로벌 네비게이션 바
function Gnb() {
  // 페이지 경로 저장
  const { pathname } = useRouter();

  // /folder에서는 position-fixed 제거
  const navClasses = classNames(
    styles.gnb,
    { 'position-fixed': pathname !== ROUTE_PATHS.folder },
    'margin-auto',
    'z-top'
  );
  // gnb의 position-fixed에 대한 더미
  const navDummyClasses = classNames({ [styles['nav-dummy']]: pathname !== ROUTE_PATHS.folder });

  return (
    <div>
      <nav className={navClasses}>
        <div className={containerClasses}>
          <Link href={ROUTE_PATHS.home} onClick={scrollToTop}>
            <div className={logoClasses}>
              <Image src={logoSvgUrl} alt="logo" fill />
            </div>
          </Link>
          <Suspense fallback={<ErrorMessage message={LOADING_MESSAGE} />}>
            <UserProfile />
          </Suspense>
        </div>
      </nav>
      {/* 더미 요소로 공간 차지 */}
      <div className={navDummyClasses} />
    </div>
  );
}

export default Gnb;
