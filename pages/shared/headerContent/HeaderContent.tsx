import classNames from 'classnames';
import Image from 'next/image';

import { SampleFolderApiResponse, SAMPLE_FOLDER_API_URL } from '@/apis/api';
import ErrorMessage from '@/components/common/ErrorMessage';
import useFetch from '@/hooks/useFetch';
import styles from '@/pages/shared/headerContent/HeaderContent.module.css';

const contentClasses = classNames(styles['header-content']);
const contentContainerClasses = classNames('flex-col', 'align-center');
const userClasses = classNames(styles['shared-user']);
const userAvatarClasses = classNames(styles['shared-user-avatar'], 'position-relative', 'overflow-hidden');
const userNameClasses = classNames(styles['shared-user-name']);
const folderNameClasses = classNames(styles['shared-folder-name'], 'text-center');

// 폴더 정보 출력
function HeaderContent() {
  // 폴더 정보 가져오기
  const url = SAMPLE_FOLDER_API_URL;
  const { data, error, isError } = useFetch<SampleFolderApiResponse>(url, 'headerContent');

  if (!data?.folder) return <ErrorMessage message="Empty Folder" />;
  if (isError) return <ErrorMessage message={`${error}`} />;

  const ownerProfileImg = data?.folder.owner.profileImageSource || '';
  const ownerName = data?.folder.owner.name ? `@${data.folder.owner.name}` : '';
  const folderName = data?.folder.name || '';

  return (
    <div className={contentClasses}>
      <div>
        <div className={contentContainerClasses}>
          <div className={userClasses}>
            <div className={userAvatarClasses}>
              <Image
                src={ownerProfileImg}
                alt="ownerProfileImg"
                width={240}
                height={240}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p className={userNameClasses}>{ownerName}</p>
          </div>
          <p className={folderNameClasses}>{folderName}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
