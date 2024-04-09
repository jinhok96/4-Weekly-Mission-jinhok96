import classNames from 'classnames';
import React from 'react';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/SortingButton.module.css';

interface SortingButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function SortingButton({ className, children, onClick }: SortingButtonProps) {
  const buttonClasses = classNames(styles['sorting-button'], className);

  const button = (
    <Button className={buttonClasses} onClick={onClick}>
      {children}
    </Button>
  );
  return button;
}

export default SortingButton;
