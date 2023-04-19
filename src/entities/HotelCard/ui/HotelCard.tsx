import type { FC } from 'react';
import { RatingStars } from '../../../widget/RatingStars';
import { LikeButton } from '../../../widget/LikeButton';

interface HotelCardProps {
  className?: string;
  title: string;
  path: string;
  bookingDate: string;
  bookingCount: string;
  price: string;
}

export const HotelCard: FC<HotelCardProps> = ({
  className = '',
  title,
  path,
  bookingDate,
  bookingCount,
  price
}: HotelCardProps) => {
  return (
    <div className={`${className}`}>
      <img src={path} alt={title} />
      <div>
        <span>{title}</span>
        <span>{bookingDate}</span>
        <span>{bookingCount}</span>
        <RatingStars />
        <LikeButton />
        <div>
          <span>Price</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};
