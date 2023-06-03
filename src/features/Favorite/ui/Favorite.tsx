import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { FC } from 'react';

import { getFavoriteHotels, likedActions } from '../../../widget/LikeButton';
import { HotelCard } from '../../../entities/HotelCard';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';
import { getHotelsSearchData } from '../../SearchPanel/model/selectors/getHotelsSearchData/getHotelsSearchData';
import type { Hotel } from '../../SearchPanel/model/types/HotelResponse';
import { SortSwitcher } from '../../../shared/ui/SortSwitcher/SortSwitcher';
import { SortType } from '../../../widget/LikeButton/model/types/likedSchema';
import { getFavoriteSortType } from '../../../widget/LikeButton/model/selectors/getFavoriteSortType/getFavoriteSortType';

interface FavoriteProps {
  className?: string;
}

export const Favorite: FC<FavoriteProps> = ({
  className = ''
}: FavoriteProps) => {
  const favorites = useSelector(getFavoriteHotels);
  const dispatch = useDispatch();
  const searchData = useSelector(getHotelsSearchData);
  const sortType = useSelector(getFavoriteSortType);

  const handleLike = (
    hotel: Hotel,
    bookingDate: string,
    bookingCount: string
  ): void => {
    dispatch(likedActions.add({ hotel, bookingDate, bookingCount }));
  };

  const handleSortByRate = useCallback(
    (type: 'asc' | 'desc'): void => {
      dispatch(likedActions.sortByRate(type));
      dispatch(likedActions.setSortType(SortType.RATE));
    },
    [dispatch]
  );

  const handleSortByPrice = useCallback(
    (type: 'asc' | 'desc'): void => {
      dispatch(likedActions.sortByPrice(type));
      dispatch(likedActions.setSortType(SortType.PRICE));
    },
    [dispatch]
  );

  return (
    <div
      className={
        'w-[360px] h-[472px] flex flex-col p-8 gap-8 bg-white rounded-2xl'
      }
    >
      <Text text="Избранное" theme={TextTheme.Big} />
      <div className="flex gap-2">
        <SortSwitcher
          text="Рейтинг"
          onSort={handleSortByRate}
          active={sortType === SortType.RATE}
        />
        <SortSwitcher
          text="Цена"
          onSort={handleSortByPrice}
          active={sortType === SortType.PRICE}
        />
      </div>

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
