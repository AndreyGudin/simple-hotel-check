import type { FC } from 'react';
import { HotelCard } from '../HotelCard/HotelCard';
import { useSelector } from 'react-redux';
import { getHotelsData } from '../../../SearchPanel/model/selectors/getHotelsData/getHotelsData';
import { getHotelsSearchData } from '../../../SearchPanel/model/selectors/getHotelsSearchData/getHotelsSearchData';
import { ImageCarousel } from '../../../../widget/ImageCarousel';

interface HotelListProps {
  className?: string;
}

export const HotelList: FC<HotelListProps> = ({
  className = ''
}: HotelListProps) => {
  const hotels = useSelector(getHotelsData);
  const searchData = useSelector(getHotelsSearchData);
  return (
    <div className=" px-7 py-8 bg-white w-full">
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
      <div className="flex flex-col gap-3 ">
        {hotels.map((hotel) => {
          return (
            <HotelCard
              key={hotel.hotelId}
              stars={hotel.stars}
              title={hotel.hotelName}
              bookingDate={searchData.checkIn}
              bookingCount={searchData.count}
              price={hotel.priceAvg.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};
