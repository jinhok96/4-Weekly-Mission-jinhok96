import classNames from 'classnames';
import Image from 'next/image';

import useFetch from 'hooks/useFetch';

import { SampleFolderApiResponse, SAMPLE_FOLDER_API_URL } from '@/apis/api';
import ErrorMessage from '@/components/common/ErrorMessage';
import styles from '@/pages/shared/headerContent/HeaderContent.module.css';

const contentClasses = classNames(styles['header-content']);
const contentContainerClasses = classNames('flex-col', 'align-center');
const userClasses = classNames(styles['shared-user']);
const userAvatarClasses = classNames(styles['shared-user-avatar'], 'position-relative');
const userNameClasses = classNames(styles['shared-user-name']);
const folderNameClasses = classNames(styles['shared-folder-name'], 'text-center');

// 폴더 정보 출력
function HeaderContent() {
  const LOADING_MESSAGE = 'Loading...';

  // 폴더 정보 가져오기
  const url = SAMPLE_FOLDER_API_URL;
  const { data, loading, error } = useFetch<SampleFolderApiResponse>(url);

  const ownerProfileImg = data?.folder.owner.profileImageSource || '';
  const ownerName = data?.folder.owner.name ? `@${data.folder.owner.name}` : '';
  const folderName = data?.folder.name || '';

  return (
    <div className={contentClasses}>
      <div>
        {data && (
          <div className={contentContainerClasses}>
            <div className={userClasses}>
              <div className={userAvatarClasses}>
                <Image src={ownerProfileImg} alt="ownerProfileImg" fill />
              </div>
              <p className={userNameClasses}>{ownerName}</p>
            </div>
            <p className={folderNameClasses}>{folderName}</p>
          </div>
        )}
        {loading && <ErrorMessage message={LOADING_MESSAGE} />}
        {error !== null && <ErrorMessage message={String(error)} />}
      </div>
    </div>
  );
}

export default HeaderContent;
