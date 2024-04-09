import classNames from 'classnames';
import React, { useState } from 'react';

import TextInput from '@/components/common/TextInput';
import ModalButton from '@/components/common/buttons/ModalButton';
import ModalContainer from '@/components/modals/ModalContainer';
import styles from '@/components/modals/addModals/AddFolderModal.module.css';

const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
const inputClasses = classNames(styles.input, 'width-full');
const buttonClasses = classNames('background-gra-primary', 'width-full');

interface AddFolderModalProps {
  onSubmit: () => void;
  onClose: () => void;
}

function AddFolderModal({ onSubmit, onClose }: AddFolderModalProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 임시 버튼 클릭 이벤트
  const handleButtonClick = () => {
    if (!inputValue) return null;

    console.log(inputValue);
    return onSubmit();
  };

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더 추가</p>
      <TextInput className={inputClasses} value={inputValue} onChange={handleInputChange} placeholder="내용 입력" />
      <ModalButton className={buttonClasses} onClick={handleButtonClick}>
        추가하기
      </ModalButton>
    </ModalContainer>
  );
}

export default AddFolderModal;
