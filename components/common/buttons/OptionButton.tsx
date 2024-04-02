import classNames from 'classnames';
import Button from 'components/Common/Button';
import styles from 'components/Common/OptionButton.module.css';

const optionImageClasses = classNames(styles['option-image']);

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
      <img className={optionImageClasses} src={imageUrl} alt={text} />
      {text}
    </Button>
  );
}

export default Option;
