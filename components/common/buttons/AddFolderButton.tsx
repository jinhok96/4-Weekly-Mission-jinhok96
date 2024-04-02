import classNames from 'classnames';
import Image from 'next/image';

import styles from '@/components/common/buttons/AddFolderButton.module.css';
import Button from '@/components/common/buttons/Button';
import AddIcon from '@/public/images/add-primary.svg';

const iconClasses = classNames(styles['add-folder-icon']);

interface AddFolderButtonProps {
  className?: string;
  onClick: () => void;
}

function AddFolderButton({ className = '', onClick }: AddFolderButtonProps) {
  const buttonClasses = classNames(
    styles['add-folder-button'],
    'align-center',
    'white-space-nowrap',
    'text-color-primary',
    'background-white',
    className
  );

  const button = (
    <Button className={buttonClasses} text="폴더 추가" onClick={onClick}>
      <Image className={iconClasses} src={AddIcon} alt="AddIcon" />
    </Button>
  );

  return button;
}

export default AddFolderButton;
