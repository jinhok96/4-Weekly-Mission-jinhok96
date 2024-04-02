import classNames from 'classnames';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/ModalButton.module.css';

interface ModalButtonProps {
  className?: string;
  text?: string;
  onClick: () => void;
}

function ModalButton({ className = '', text = '', onClick }: ModalButtonProps) {
  const buttonClasses = classNames(styles.button, 'text-color-light', 'border-none', className);

  const button = <Button className={buttonClasses} text={text} onClick={onClick} />;
  return button;
}

export default ModalButton;
