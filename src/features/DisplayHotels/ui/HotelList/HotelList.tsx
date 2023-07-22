import { useDispatch, useSelector } from 'react-redux';
import type { FC } from 'react';

import { ImageCarousel } from '@/widget/ImageCarousel';
import { TitleOfHotelList } from '../TitleOfHotelList/TitleOfHotelList';
import { Text } from '@/shared/ui/Text/Text';
import { HotelCard } from '@/entities/HotelCard';
import { getFavoriteHotels, likedActions } from '@/widget/LikeButton';
import {
  type Hotel,
  getHotelsData,
  getHotelsSearchData,
  getIsLoading
} from '@/features/SearchPanel';
import { Spinner } from '@/shared/ui/Spinner/Spinner';

interface HotelListProps {
  className?: string;
}

export const HotelList: FC<HotelListProps> = ({
  className = ''
}: HotelListProps) => {
  const hotels = useSelector(getHotelsData);
  const favorites = useSelector(getFavoriteHotels);
  const dispatch = useDispatch();
  const searchData = useSelector(getHotelsSearchData);
  const isLoading = useSelector(getIsLoading);

  const handleLike = (
    hotel: Hotel,
    bookingDate: string,
    bookingCount: string
  ): void => {
    dispatch(likedActions.add({ hotel, bookingDate, bookingCount }));
  };

  const isHotelLiked = (hotel: string): boolean => {
    const likedHotels = [...favorites];
    const hotelToSearch = likedHotels.findIndex(
      (fav) => fav.hotel.hotelName === hotel
    );
    return hotelToSearch > -1;
  };

  return (
    <div className="w-[664px] h-[902px] px-7 py-8 flex flex-col bg-white gap-7 rounded-2xl">
      <TitleOfHotelList />
      <ImageCarousel>
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
        <img src="https://placehold.co/300x200" alt="placeholder" />
      </ImageCarousel>
      <div>
        <Text text="Добавлено в избранное: " />
        <Text text={`${favorites.length}`} className="font-medium" />
        <Text text={` отеля`} />
      </div>
      <div className="w-full h-full flex flex-col gap-3 overflow-auto scrollbar">
        {isLoading ? (
          <Spinner />
        ) : (
          hotels.map((hotel) => {
            return (
              <HotelCard
                key={hotel.hotelId}
                stars={hotel.stars}
                title={hotel.hotelName}
                bookingDate={searchData.checkIn}
                bookingCount={searchData.count}
                price={hotel.priceAvg.toString()}
                displayImage={true}
                liked={isHotelLiked(hotel.hotelName)}
                onLiked={() =>
                  handleLike(hotel, searchData.checkIn, searchData.count)
                }
              />
            );
          })
        )}
      </div>
    </div>
  );
};
