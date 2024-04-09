import classNames from 'classnames';
import React, { useState } from 'react';

import { FolderData } from '@/apis/api';
import TextInput from '@/components/common/TextInput';
import ModalButton from '@/components/common/buttons/ModalButton';
import ModalContainer from '@/components/modals/ModalContainer';
import styles from '@/components/modals/editModals/EditFolderNameModal.module.css';

const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
const inputClasses = classNames(styles.input, 'width-full');
const buttonClasses = classNames('background-gra-primary', 'width-full');

interface EditFolderNameModalProps {
  folder: FolderData;
  onSubmit: () => void;
  onClose: () => void;
}

function EditFolderNameModal({ folder, onSubmit, onClose }: EditFolderNameModalProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 임시 버튼 클릭 이벤트
  const handleButtonClick = () => {
    if (!inputValue) return null;
    // folder 임시 출력
    console.log(`${folder.name} -> ${inputValue}`);
    return onSubmit();
  };

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더 이름 변경</p>
      <TextInput className={inputClasses} value={inputValue} onChange={handleInputChange} placeholder="내용 입력" />
      <ModalButton className={buttonClasses} onClick={handleButtonClick}>
        변경하기
      </ModalButton>
    </ModalContainer>
  );
}

export default EditFolderNameModal;
