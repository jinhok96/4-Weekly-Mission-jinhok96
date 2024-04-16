/* eslint-disable jsx-a11y/control-has-associated-label */
import { UseFormRegisterReturn } from 'react-hook-form';

import Input from '@/components/common/Input';
import styles from '@/pages/signin/components/InputForm.module.css';
import { ReactComponent as EyeOffSvg } from '@/public/images/eye-off.svg';
import { ReactComponent as EyeOnSvg } from '@/public/images/eye-on.svg';

type inputFormatType = {
  email: {
    name: string;
    type: string;
    placeholder: string;
    validate: { pattern: { value: RegExp; message: string }; required: string };
  };
  password: { name: string; type: string; placeholder: string; validate: { required: string } };
};

interface InputFormProps {
  register: UseFormRegisterReturn;
  inputFormat: inputFormatType['email'] | inputFormatType['password'];
  errorMessage: string | undefined | null;
  passwordVisible?: boolean;
  togglePassword?: () => void;
}

export default function InputForm({
  register,
  inputFormat,
  errorMessage,
  passwordVisible,
  togglePassword,
}: InputFormProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={inputFormat.name}>
        {inputFormat.name}
      </label>
      <div className="position-relative">
        <Input
          {...register}
          type={inputFormat.type}
          placeholder={inputFormat.placeholder}
          errorMessage={errorMessage}
        />
        {inputFormat.type === 'password' && (
          <button className={styles.eyeButton} type="button" onClick={togglePassword}>
            <EyeOffSvg />
          </button>
        )}
        {passwordVisible && (
          <button className={styles.eyeButton} type="button" onClick={togglePassword}>
            <EyeOnSvg />
          </button>
        )}
      </div>

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
