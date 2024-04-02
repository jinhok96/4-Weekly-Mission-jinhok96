import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/TextInput.module.css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function TextInput({ className = '', value = '', onChange, placeholder = '' }: TextInputProps) {
  const inputClasses = classNames(
    styles.input,
    'background-white',
    'text-color-gray100',
    'border-gray20-1px',
    className
  );

  return <input className={inputClasses} type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default TextInput;
