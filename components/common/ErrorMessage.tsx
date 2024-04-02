import classNames from 'classnames';

import styles from 'components/Common/ErrorMessage.module.css';

const messageClasses = classNames(styles['error-message'], 'text-center');

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className={messageClasses}>{message}</p>;
}

export default ErrorMessage;
