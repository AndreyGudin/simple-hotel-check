import type { FC } from 'react';
import { useSelector } from 'react-redux';

import { getFavoriteHotels } from '../../../widget/LikeButton';
import { HotelCard } from '../../../entities/HotelCard';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';

interface FavoriteProps {
  className?: string;
}

export const Favorite: FC<FavoriteProps> = ({
  className = ''
}: FavoriteProps) => {
  const favorites = useSelector(getFavoriteHotels);
  return (
    <div className={'w-[360px] h-[472px] flex flex-col p-8 gap-8 bg-white'}>
      <Text text="Избранное" theme={TextTheme.Big} />
      <div className="overflow-auto flex-grow scrollbar">
        {favorites.map((favorite) => {
          return (
            <HotelCard
              key={favorite.hotel.hotelName}
              title={favorite.hotel.hotelName}
              bookingCount={favorite.bookingCount}
              bookingDate={favorite.bookingDate}
              price={favorite.hotel.priceAvg.toString()}
              stars={favorite.hotel.stars}
              liked={true}
              onLiked={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
};
