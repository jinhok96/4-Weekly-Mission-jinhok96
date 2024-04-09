import classNames from 'classnames';
import React from 'react';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/ModalButton.module.css';

interface ModalButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

function ModalButton({ className = '', children, onClick }: ModalButtonProps) {
  const buttonClasses = classNames(styles.button, 'text-color-light', 'border-none', className);

  const button = (
    <Button className={buttonClasses} onClick={onClick}>
      {children}
    </Button>
  );
  return button;
}

export default ModalButton;
