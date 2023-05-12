import type { FC } from 'react';

import { LikeButton } from '../../../../widget/LikeButton';
import { RatingStars } from '../../../../widget/RatingStars';
import HouseIcon from '../../../../shared/assets/icons/house.svg';
import { Text, TextTheme } from '../../../../shared/ui/Text/Text';

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
  const formattedPrice = numberFormatter.format(parseInt(price, 10));
  return (
    <div
      className={`${className} flex gap-6 items-center border-b border-[#878787]/5 py-4`}
    >
      <div className="w-[64px] h-[64px] rounded-full bg-[#41522E]/10 flex items-center justify-center">
        <HouseIcon />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <span className="text-lg">{title}</span>
          <LikeButton />
        </div>
        <div>
          <Text text={formattedDate} theme={TextTheme.Light} />
          <Text text={' - '} theme={TextTheme.Light} />
          <Text text={`${bookingCount} день`} theme={TextTheme.Light} />
        </div>
        <div>
          <div className="flex gap-2 justify-between mt-[5px]">
            <RatingStars stars={stars} />
            <div className="flex gap-6 items-center">
              <Text text="Price" theme={TextTheme.Small} />
              <Text text={`${formattedPrice} ₽`} theme={TextTheme.Normal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
