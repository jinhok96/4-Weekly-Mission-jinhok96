import classNames from 'classnames';
import Image from 'next/image';

import { USER_API_URL, UserIdApiResponse } from '@/apis/api';
import LoginButton from '@/components/common/buttons/LoginButton';
import styles from '@/components/layouts/header/gnb/UserProfile.module.css';
import useFetch from '@/hooks/useFetch';
import defaultProfileImg from '@/public/images/profile-img.png';

const profileClasses = classNames(styles['gnb-profile'], 'flex-row', 'align-center');
const profileImgClasses = classNames(styles['profile-img'], 'position-relative', 'overflow-hidden');
const profileEmailClasses = classNames(styles['profile-email'], 'hidden-block-mobile-only', 'text-color-gray100');

export default function UserProfile() {
  const url = USER_API_URL;
  const { data, isError } = useFetch<UserIdApiResponse>(url, ['userProfile', url]);

  // data가 없을 경우 얼리 리턴
  if (!data?.data) return <LoginButton />;

  // error가 있을 경우 얼리 리턴
  if (isError) return <LoginButton />;

  // data를 가공하여 userInfo에 저장
  const userInfo = data?.data && data.data.length > 0 ? data.data[0] : null;

  const userProfileImg = userInfo?.profileImageSource ?? defaultProfileImg;
  const userEmail = userInfo?.email ?? '';

  return (
    <div className={profileClasses}>
      <div className={profileImgClasses}>
        <Image
          src={userProfileImg}
          alt="profile-img"
          width={112}
          height={112}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <p className={profileEmailClasses}>{userEmail}</p>
    </div>
  );
}
