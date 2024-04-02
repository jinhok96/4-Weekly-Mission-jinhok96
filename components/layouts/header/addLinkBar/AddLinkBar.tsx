import classNames from 'classnames';
import React, { useState } from 'react';

import useModal from 'hooks/useModal';

import AddLinkButton from '@/components/common/buttons/AddLInkButton';
import styles from '@/components/layouts/header/addLinkBar/AddLinkBar.module.css';
import { modalList } from '@/contexts/Modal';
import AddLinkSVG from '@/public/images/link.svg';

const addLinkClasses = classNames(styles['add-link-bar'], 'position-relative', 'width-full', 'margin-auto');
const inputClasses = classNames(styles['add-link-bar-input'], 'background-white', 'text-color-gray60', 'width-full');
const inputImgClasses = classNames(styles['add-link-bar-icon'], 'position-absolute');
const addLinkButtonClasses = classNames(styles['add-link-button'], 'position-absolute');

function AddLinkBar() {
  const [addLinkValue, setAddLinkValue] = useState('');
  const { openModal } = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddLinkValue(e.target.value);
  };

  const handleAddLinkButtonClick = () => {
    if (!addLinkValue) {
      return null;
    }

    console.log('AddLink');
    const link = { url: addLinkValue };

    const handleAddLink = () => {
      console.log('handleAddLink');
      console.log(link);
    };

    return openModal(modalList.AddToForderModal, { onSubmit: handleAddLink, link });
  };

  return (
    <div className={addLinkClasses}>
      <input
        className={inputClasses}
        type="text"
        value={addLinkValue}
        onChange={handleInputChange}
        placeholder="링크를 추가해 보세요"
      />
      <AddLinkSVG className={inputImgClasses} />
      <AddLinkButton className={addLinkButtonClasses} onClick={handleAddLinkButtonClick} />
    </div>
  );
}

export default AddLinkBar;
