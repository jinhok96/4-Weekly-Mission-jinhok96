import classNames from 'classnames';

import ModalButton from '@/components/common/buttons/ModalButton';
import ModalContainer from '@/components/modals/ModalContainer';
import styles from '@/components/modals/deleteModals/DeleteFolderModal.module.css';

const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
const folderTitleClasses = classNames(styles['folder-title'], 'text-color-gray60', 'text-center');
const buttonClasses = classNames('background-red', 'width-full');

interface DeleteFolderModalProps {
  folder: { name: string };
  onSubmit: () => void;
  onClose: () => void;
}

function DeleteFolderModal({ folder, onSubmit, onClose }: DeleteFolderModalProps) {
  // {id, created_at, name, user_id, favorite, link: {count}}
  const { name } = folder;

  const handleButtonClick = () => {
    console.log('폴더 삭제');
    onSubmit();
  };

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더 삭제</p>
      <p className={folderTitleClasses}>{name}</p>
      <ModalButton className={buttonClasses} onClick={handleButtonClick}>
        삭제하기
      </ModalButton>
    </ModalContainer>
  );
}

export default DeleteFolderModal;
