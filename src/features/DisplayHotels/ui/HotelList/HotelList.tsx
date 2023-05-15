import { useDispatch, useSelector } from 'react-redux';
import type { FC } from 'react';

import { getHotelsData } from '../../../SearchPanel/model/selectors/getHotelsData/getHotelsData';
import { getHotelsSearchData } from '../../../SearchPanel/model/selectors/getHotelsSearchData/getHotelsSearchData';
import { ImageCarousel } from '../../../../widget/ImageCarousel';
import { TitleOfHotelList } from '../TitleOfHotelList/TitleOfHotelList';
import { Text } from '../../../../shared/ui/Text/Text';
import { HotelCard } from '../../../../entities/HotelCard';
import type { Hotel } from '../../../SearchPanel/model/types/HotelResponse';
import { likedActions } from '../../../../widget/LikeButton';

interface HotelListProps {
  className?: string;
}

export const HotelList: FC<HotelListProps> = ({
  className = ''
}: HotelListProps) => {
  const hotels = useSelector(getHotelsData);
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
    <div className="w-[664px] h-[902px] px-7 py-8 flex flex-col bg-white gap-7">
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
        <Text text={`3`} className="font-medium" />
        <Text text={` отеля`} />
      </div>
      <div className="flex flex-col gap-3 overflow-auto scrollbar">
        {hotels.map((hotel) => {
          return (
            <HotelCard
              key={hotel.hotelId}
              stars={hotel.stars}
              title={hotel.hotelName}
              bookingDate={searchData.checkIn}
              bookingCount={searchData.count}
              price={hotel.priceAvg.toString()}
              displayImage={true}
              onLiked={() =>
                handleLike(hotel, searchData.checkIn, searchData.count)
              }
            />
          );
        })}
      </div>
    </div>
  );
};
