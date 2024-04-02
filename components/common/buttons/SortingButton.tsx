import classNames from 'classnames';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/SortingButton.module.css';

interface SortingButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

function SortingButton({ className, text, onClick }: SortingButtonProps) {
  const buttonClasses = classNames(styles['sorting-button'], className);

  const button = <Button className={buttonClasses} text={text} onClick={onClick} />;
  return button;
}

export default SortingButton;
