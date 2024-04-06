import classNames from 'classnames';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/FloatingAddFolderButton.module.css';
import { ReactComponent as AddIconSvg } from '@/public/images/add-gray10.svg';

const iconClasses = classNames(styles['floating-add-folder-icon']);

interface FloatingAddFolderButtonProps {
  className?: string;
  onClick?: () => void;
}

function FloatingAddFolderButton({ className = '', onClick }: FloatingAddFolderButtonProps) {
  const buttonClasses = classNames(
    styles['floating-add-folder-button'],
    'text-color-gray10',
    'background-primary',
    className
  );
  const button = (
    <Button className={buttonClasses} text="폴더 추가" onClick={onClick}>
      <AddIconSvg className={iconClasses} />
    </Button>
  );

  return button;
}

export default FloatingAddFolderButton;
