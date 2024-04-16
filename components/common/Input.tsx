import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined | null;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { errorMessage, ...rest } = props;
  const inputClasses = classNames(styles.input, errorMessage && styles.invalid);

  // let errorMessage: React.ReactNode = null;
  // if (typeof error === 'string') {
  //   errorMessage = error; // 직접적인 문자열 에러
  // } else if (error && typeof error.message === 'string') {
  //   errorMessage = error.message; // FieldError의 경우
  // }

  return (
    <div className={styles.container}>
      <input className={inputClasses} ref={ref} {...rest} />
    </div>
  );
});

export default Input;
