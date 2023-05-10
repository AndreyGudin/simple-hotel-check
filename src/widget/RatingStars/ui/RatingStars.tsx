import type { FC } from 'react';
import { StarIcon } from '../../../shared/ui/StarIcon/StarIcon';

interface RatingStarsProps {
  className?: string;
  stars: number;
}

export const RatingStars: FC<RatingStarsProps> = ({
  className = '',
  stars
}: RatingStarsProps) => {
  return (
    <div className={`${className} flex gap-1`}>
      <StarIcon data="1" stars={stars} />
      <StarIcon data="2" stars={stars} />
      <StarIcon data="3" stars={stars} />
      <StarIcon data="4" stars={stars} />
      <StarIcon data="5" stars={stars} />
    </div>
  );
};
