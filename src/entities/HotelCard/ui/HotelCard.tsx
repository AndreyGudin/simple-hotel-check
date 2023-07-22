import type { FC } from 'react';

import { LikeButton } from '@/widget/LikeButton';
import { RatingStars } from '@/widget/RatingStars';
import HouseIcon from '@/shared/assets/icons/house.svg';
import { Text, TextSize } from '@/shared/ui/Text/Text';

interface HotelCardProps {
  className?: string;
  title: string;
  stars: number;
  bookingDate: string;
  bookingCount: string;
  price: string;
  displayImage?: boolean;
  path?: string;
  liked?: boolean;
  onLiked?: () => void;
}

export const HotelCard: FC<HotelCardProps> = ({
  className = '',
  liked = false,
  path = '',
  displayImage = false,
  title,
  stars,
  bookingDate,
  bookingCount,
  price,
  onLiked = () => {}
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
  const hideText = displayImage
    ? ''
    : 'inline-block overflow-hidden whitespace-nowrap max-w-[267px]';
  return (
    <div
      className={`${className} flex gap-6 items-center border-b border-[#878787]/5 py-4 pr-4`}
    >
      {displayImage ? (
        path.length > 0 ? (
          <div className="w-[64px] h-[64px] rounded-full bg-[#41522E]/10 flex items-center justify-center">
            <img src={path} alt="" />
          </div>
        ) : (
          <div className="w-[64px] h-[64px] rounded-full bg-[#41522E]/10 flex items-center justify-center">
            <HouseIcon />
          </div>
        )
      ) : null}
      <div className="flex-grow">
        <div className="flex justify-between">
          <Text text={title} className={`text-ellipsis ${hideText}`} />
          <LikeButton onClick={() => onLiked()} active={liked} />
        </div>
        <div>
          <Text text={formattedDate} size={TextSize.Light} />
          <Text text={' - '} size={TextSize.Light} />
          <Text text={`${bookingCount} день`} size={TextSize.Light} />
        </div>
        <div>
          <div className="flex gap-2 justify-between mt-[5px]">
            <RatingStars stars={stars} />
            <div className="flex gap-6 items-center">
              <Text text="Price" size={TextSize.Small} />
              <Text
                text={`${formattedPrice} ₽`}
                size={TextSize.Normal}
                className="font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
