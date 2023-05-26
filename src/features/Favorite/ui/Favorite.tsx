import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoriteHotels, likedActions } from '../../../widget/LikeButton';
import { HotelCard } from '../../../entities/HotelCard';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';
import { getHotelsSearchData } from '../../SearchPanel/model/selectors/getHotelsSearchData/getHotelsSearchData';
import type { Hotel } from '../../SearchPanel/model/types/HotelResponse';
import { SortSwitcher } from '../../../shared/ui/SortSwitcher/SortSwitcher';

interface FavoriteProps {
  className?: string;
}

export const Favorite: FC<FavoriteProps> = ({
  className = ''
}: FavoriteProps) => {
  const favorites = useSelector(getFavoriteHotels);
  const dispatch = useDispatch();
  const searchData = useSelector(getHotelsSearchData);

  const handleLike = (
    hotel: Hotel,
    bookingDate: string,
    bookingCount: string
  ): void => {
    dispatch(likedActions.add({ hotel, bookingDate, bookingCount }));
  };

  return (
    <div
      className={
        'w-[360px] h-[472px] flex flex-col p-8 gap-8 bg-white rounded-2xl'
      }
    >
      <Text text="Избранное" theme={TextTheme.Big} />
      <SortSwitcher text="Рейтинг" />
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
              onLiked={() => {
                handleLike(
                  favorite.hotel,
                  searchData.checkIn,
                  searchData.count
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
