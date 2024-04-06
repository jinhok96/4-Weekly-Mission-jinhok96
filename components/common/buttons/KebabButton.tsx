import classNames from 'classnames';
import React from 'react';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/KebabButton.module.css';
import { ReactComponent as KebabSvg } from '@/public/images/kebab.svg';

const buttonImageClasses = classNames('width-full');

interface KebabButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function KebabButton({ className = '', onClick }: KebabButtonProps) {
  const buttonClasses = classNames(styles['kebab-button'], 'background-none', 'border-none', className);

  return (
    <Button className={buttonClasses} onClick={onClick}>
      <KebabSvg className={buttonImageClasses} />
    </Button>
  );
}

export default KebabButton;
