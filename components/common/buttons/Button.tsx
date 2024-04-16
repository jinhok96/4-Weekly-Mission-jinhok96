/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/buttons/Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ className = '', onClick, name = '', children = null, type = 'button' }: ButtonProps) {
  const buttonClasses = classNames(styles.button, 'cursor-pointer', className);

  const button = (
    <button className={buttonClasses} type={type} name={name} onClick={onClick}>
      {children}
    </button>
  );

  return button;
}

export default Button;
