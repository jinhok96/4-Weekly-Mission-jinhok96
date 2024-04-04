import classNames from 'classnames';
import Image from 'next/image';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/OptionButton.module.css';

const optionImageClasses = classNames(styles['option-image'], 'position-relative');

interface OptionButtonProps {
  imageUrl: string;
  text: string;
  className?: string;
  onClick: () => void;
}

function OptionButton({ imageUrl, text, className = '', onClick }: OptionButtonProps) {
  const optionClasses = classNames(
    styles.option,
    'flex-row',
    'align-center',
    'text-color-gray60',
    'border-none',
    'background-none',
    className
  );

  return (
    <Button className={optionClasses} onClick={onClick}>
      <div className={optionImageClasses}>
        <Image src={imageUrl} alt={text} fill />
      </div>
      {text}
    </Button>
  );
}

export default OptionButton;
