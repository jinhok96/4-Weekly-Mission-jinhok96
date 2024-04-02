import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/KebabButton.module.css';
import KebabImg from '@/public/images/kebab.svg';

const buttonImageClasses = classNames('width-full');

interface KebabButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function KebabButton({ className = '', onClick }: KebabButtonProps) {
  const buttonClasses = classNames(styles['kebab-button'], 'background-none', 'border-none', className);

  return (
    <Button className={buttonClasses} onClick={onClick}>
      <Image className={buttonImageClasses} src={KebabImg} alt="KebabIcon" />
    </Button>
  );
}

export default KebabButton;
