import type { FC } from 'react';
import { HotelCard } from '../HotelCard/HotelCard';
import { useSelector } from 'react-redux';
import { getHotelsData } from '../../../SearchPanel/model/selectors/getHotelsData/getHotelsData';
import { getHotelsSearchData } from '../../../SearchPanel/model/selectors/getHotelsSearchData/getHotelsSearchData';
import { ImageCarousel } from '../../../../widget/ImageCarousel';
import { Text, TextTheme } from '../../../../shared/ui/Text/Text';

interface HotelListProps {
  className?: string;
}

export const HotelList: FC<HotelListProps> = ({
  className = ''
}: HotelListProps) => {
  const hotels = useSelector(getHotelsData);
  const searchData = useSelector(getHotelsSearchData);
  const dateFormatter = new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const date = searchData.checkIn ? new Date(searchData.checkIn) : new Date();
  const formattedDate = dateFormatter.format(date);
  return (
    <div className=" px-7 py-8 flex flex-col bg-white w-full gap-7">
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <Text text="Отели" theme={TextTheme.VeryBig} />
          <div className="rotate-45 w-[12px] h-[12px] border-t-4 border-r-4 border-solid border-[#A7A7A7]" />
          <Text text={searchData.city} theme={TextTheme.VeryBig} />
        </div>
        <Text text={formattedDate ?? ''} theme={TextTheme.Big} />
      </div>

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
