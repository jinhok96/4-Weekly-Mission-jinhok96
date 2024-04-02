import classNames from 'classnames';
import React from 'react';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/KebabButton.module.css';
import StarSVG from '@/public/images/star.svg';

const buttonImageClasses = classNames('width-full');

interface StarButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isFavorite?: boolean;
}

function StarButton({ className = '', onClick, isFavorite = false }: StarButtonProps) {
  const buttonClasses = classNames(styles['star-button'], 'background-none', 'border-none', className);
  const DefaultStar = <StarSVG className={buttonImageClasses} fill="black" fillOpacity={0.2} />;
  const FavoriteStar = <StarSVG className={buttonImageClasses} fill="var(--primary, #6d6afe)" fillOpacity={1} />;

  return (
    <Button className={buttonClasses} onClick={onClick}>
      {isFavorite ? FavoriteStar : DefaultStar}
    </Button>
  );
}

export default StarButton;
