import classNames from 'classnames';
import React from 'react';

import Button from '@/components/common/buttons/Button';
import styles from '@/components/common/buttons/KebabButton.module.css';
import { ReactComponent as StarImg } from '@/public/images/star.svg';

const buttonImageClasses = classNames('width-full');

interface StarButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isFavorite?: boolean;
}

function StarButton({ className = '', onClick, isFavorite = false }: StarButtonProps) {
  const buttonClasses = classNames(styles['star-button'], 'background-none', 'border-none', className);
  // star.svg -> fill="current" fill-opacity="current" stroke="current" -> styles에 작성

  const DefaultStar = <StarImg className={buttonImageClasses} fill="black" fillOpacity={0.2} />;
  const FavoriteStar = <StarImg className={buttonImageClasses} fill="var(--primary, #6d6afe)" fillOpacity={1} />;

  return (
    <Button className={buttonClasses} onClick={onClick}>
      {isFavorite ? FavoriteStar : DefaultStar}
    </Button>
  );
}

export default StarButton;
