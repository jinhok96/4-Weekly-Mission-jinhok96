import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/buttons/Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string;
  text?: string;
}

function Button({ className = '', text = '', onClick, children = null }: ButtonProps) {
  const buttonClasses = classNames(styles.button, 'cursor-pointer', className);

  const button = (
    <button className={buttonClasses} type="button" onClick={onClick}>
      {text}
      {children}
    </button>
  );

  return button;
}

export default Button;
