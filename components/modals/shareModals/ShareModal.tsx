import classNames from 'classnames';
import Image from 'next/image';

import { FolderData } from '@/apis/api';
import Button from '@/components/common/buttons/Button';
import ModalContainer from '@/components/modals/ModalContainer';
import styles from '@/components/modals/shareModals/ShareModal.module.css';
import Facebook from '@/public/images/share-facebook.svg';
import Kakao from '@/public/images/share-kakao.svg';
import LinkCopy from '@/public/images/share-link-copy.svg';

const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
const folderTitleClasses = classNames(styles['folder-title'], 'text-color-gray60', 'text-center');
const shareButtonContainerClasses = classNames(styles['share-button-container'], 'flex-row', 'justify-center');
const shareButtonClasses = classNames('border-none', 'background-none');
const shareButtonImgClasses = classNames(styles['share-button-img']);
const shareButtonLabelClasses = classNames(styles['share-button-label'], 'font-color-gray100');

interface ShareModalProps {
  folder: FolderData;
  onClose: () => void;
}

function ShareModal({ folder, onClose }: ShareModalProps) {
  const { id, name } = folder;

  const host = window.location.origin;
  const shareUrl = `${host}/shared/${id}`;

  // 공유 옵션
  type ShareType = 'kakao' | 'facebook' | 'linkCopy';

  type ShareListType = {
    label: string;
    type: ShareType;
    src: string;
    alt: string;
  };

  const shareList: ShareListType[] = [
    {
      label: '카카오톡',
      type: 'kakao',
      src: Kakao,
      alt: 'kakao-icon',
    },
    {
      label: '페이스북',
      type: 'facebook',
      src: Facebook,
      alt: 'facebook-icon',
    },
    {
      label: '링크 복사',
      type: 'linkCopy',
      src: LinkCopy,
      alt: 'link-copy-icon',
    },
  ];

  const handleShareButtonClick = {
    // 카카오톡 공유는 과정 상 어려움이 있어서 클립보드 복사로 대체
    kakao: () => navigator.clipboard.writeText(shareUrl),
    facebook: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`),
    linkCopy: () => navigator.clipboard.writeText(shareUrl),
  };

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더 공유</p>
      <p className={folderTitleClasses}>{name}</p>
      <div className={shareButtonContainerClasses}>
        {shareList.map((share) => (
          <Button key={share.type} className={shareButtonClasses} onClick={handleShareButtonClick[share.type]}>
            <Image className={shareButtonImgClasses} src={share.src} alt={share.alt} />
            <p className={shareButtonLabelClasses}>{share.label} </p>
          </Button>
        ))}
      </div>
    </ModalContainer>
  );
}

export default ShareModal;
