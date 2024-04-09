import classNames from 'classnames';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/LoginButton.module.css';

const buttonClasses = classNames(styles['login-button'], 'background-gra-primary', 'text-color-light');

function LoginButton() {
  const button = <Button className={buttonClasses}>로그인</Button>;
  return button;
}

export default LoginButton;
