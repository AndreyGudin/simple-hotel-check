import type { FC } from 'react';

import { LikeButton } from '../../../../widget/LikeButton';
import { RatingStars } from '../../../../widget/RatingStars';
import HouseIcon from '../../../../shared/assets/icons/house.svg';

interface HotelCardProps {
  className?: string;
  title: string;
  stars: number;
  bookingDate: string;
  bookingCount: string;
  price: string;
}

export const HotelCard: FC<HotelCardProps> = ({
  className = '',
  title,
  stars,
  bookingDate,
  bookingCount,
  price
}: HotelCardProps) => {
  const date = new Date(bookingDate);
  const dateFormatter = new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const numberFormatter = new Intl.NumberFormat('ru');
  const formattedDate = dateFormatter.format(date);
  return (
    <div className={`${className} flex gap-6 items-center`}>
      <div className="w-[64px] h-[64px] rounded-full bg-[#41522E]/10 flex items-center justify-center">
        <HouseIcon />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <span className="text-lg">{title}</span>
          <LikeButton />
        </div>
        <div>
          <span>{formattedDate}</span>
          <span>{' - '}</span>
          <span>{`${bookingCount} день`}</span>
        </div>
        <div>
          <div className="flex justify-between">
            <RatingStars stars={stars} />
            <div className="flex gap-2">
              <span>Price</span>
              <span className="text-[21px]">{`${numberFormatter.format(
                parseInt(price, 10)
              )} ₽`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
