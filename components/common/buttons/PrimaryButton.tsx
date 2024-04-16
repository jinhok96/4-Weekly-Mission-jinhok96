import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/buttons/PrimaryButton.module.css';

import Button from './Button';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function PrimaryButton({ className, children, onClick, type = 'button' }: PrimaryButtonProps) {
  const primaryButtonClasses = classNames(
    styles.primaryButton,
    'background-gra-primary',
    'text-color-light',
    className
  );
  return (
    <Button className={primaryButtonClasses} onClick={onClick} type={type}>
      {children}
    </Button>
  );
}
