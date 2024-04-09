import classNames from 'classnames';
import React from 'react';

import useModal from 'hooks/useModal';

import { LinkData } from '@/apis/api';
import styles from '@/components/common/SelectMenu.module.css';
import Button from '@/components/common/buttons/Button';
import { modalList } from '@/contexts/Modal';

const menuElementClasses = classNames(styles['menu-element'], 'text-center', 'border-none', 'width-full');

interface SelectMenuProps {
  className?: string;
  link: LinkData;
}

function SelectMenu({ className = '', link }: SelectMenuProps) {
  const { openModal } = useModal();

  const menuList = [
    {
      id: 'deleteLink',
      label: '삭제하기',
    },
    {
      id: 'addToFolder',
      label: '폴더에 추가',
    },
  ];

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    console.log('MenuList');

    const handleDeleteLink = () => {
      console.log('handleDeleteLink');
    };

    const handleAddToFolder = () => {
      console.log('handleAddToFolder');
    };

    const buttonName = (e.currentTarget as HTMLButtonElement).name;

    switch (buttonName) {
      case menuList[0].id:
        openModal(modalList.DeleteLinkModal, { onSubmit: handleDeleteLink, link });
        break;
      case menuList[1].id:
        openModal(modalList.AddToForderModal, { onSubmit: handleAddToFolder, link });
        break;
      default:
        break;
    }
  };

  const menuContainerClasses = classNames(styles['menu-container'], 'background-white', className);

  return (
    <div>
      <div className={menuContainerClasses}>
        {menuList.map((menu) => (
          <Button key={menu.id} className={`${menuElementClasses} `} name={menu.id} onClick={handleMenuClick}>
            {menu.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
export default SelectMenu;
