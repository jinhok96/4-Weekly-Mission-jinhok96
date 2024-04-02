import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useFetch from 'hooks/useFetch';
import scrollToTop from 'utils/scrollToTop';

import { USER_API_URL, UserIdApiResponse } from '@/apis/api';
import ErrorMessage from '@/components/common/ErrorMessage';
import LoginButton from '@/components/common/buttons/LoginButton';
import styles from '@/components/layouts/header/gnb/Gnb.module.css';
import LogoSVG from '@/public/images/logo.svg';
import DefaultProfileImg from '@/public/images/profile-img.png';

const FOLDER_LOCATION = '/folder';
const LOADING_MESSAGE = 'Loading...';

const containerClasses = classNames('flex-row', 'align-center', 'justify-space-between');
const logoClasses = classNames(styles['gnb-logo']);
const profileClasses = classNames(styles['gnb-profile'], 'flex-row', 'align-center');
const profileImgClasses = classNames(styles['profile-img']);
const profileEmailClasses = classNames(styles['profile-email'], 'hidden-block-mobile-only', 'text-color-gray100');

// 글로벌 네비게이션 바
function Gnb() {
  const url = USER_API_URL;
  const { data, loading, error } = useFetch<UserIdApiResponse>(url);

  // data를 가공하여 userInfo에 저장
  const userInfo = data?.data[0] ?? null;

  // 페이지 경로 저장
  const { pathname } = useRouter();

  const userProfileImg = userInfo?.profileImageSource || DefaultProfileImg;
  const userEmail = userInfo?.email ?? '';

  // /folder에서는 position-fixed 제거
  const navClasses = classNames(styles.gnb, { 'position-fixed': pathname !== FOLDER_LOCATION }, 'margin-auto', 'z-top');
  // gnb의 position-fixed에 대한 더미
  const navDummyClasses = classNames({ [styles['nav-dummy']]: pathname !== FOLDER_LOCATION });

  return (
    <div>
      <nav className={navClasses}>
        <div className={containerClasses}>
          <Link href="/" onClick={scrollToTop}>
            <LogoSVG className={logoClasses} />
          </Link>
          {loading && <ErrorMessage message={LOADING_MESSAGE} />}
          {userInfo ? (
            <div className={profileClasses}>
              <Image className={profileImgClasses} src={userProfileImg} alt="profile-img" />
              <p className={profileEmailClasses}>{userEmail}</p>
            </div>
          ) : (
            <LoginButton />
          )}
          {error !== null && <ErrorMessage message={String(error)} />}
        </div>
      </nav>
      {/* 더미 요소로 공간 차지 */}
      <div className={navDummyClasses} />
    </div>
  );
}

export default Gnb;
