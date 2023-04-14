import { useState } from 'react';

import type { FC } from 'react';
import { StarIcon } from '../../../shared/ui/StarIcon/StarIcon';

interface RatingStarsProps {
  className?: string;
}

export const RatingStars: FC<RatingStarsProps> = ({
  className = ''
}: RatingStarsProps) => {
  const [clicked, setClicked] = useState<number>(0);

  const handleClick = (e: React.MouseEvent): void => {
    const rating = (e.target as SVGSVGElement).getAttribute('data-rating');
    console.log(e.target);
    if (rating !== null) setClicked(+rating);
  };

  return (
    <div className={`${className} flex gap-1`}>
      <StarIcon handleClick={handleClick} data="1" clicked={clicked} />
      <StarIcon handleClick={handleClick} data="2" clicked={clicked} />
      <StarIcon handleClick={handleClick} data="3" clicked={clicked} />
      <StarIcon handleClick={handleClick} data="4" clicked={clicked} />
      <StarIcon handleClick={handleClick} data="5" clicked={clicked} />
    </div>
  );
};
