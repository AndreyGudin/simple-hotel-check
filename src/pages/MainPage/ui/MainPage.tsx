import type { FC } from 'react';
// import { RatingStars } from '../../../widget/RatingStars';
import { SearchPanel } from '../../../features/SearchPanel/ui/SearchPanel';
import { HotelList } from '../../../features/DisplayHotels/ui/HotelList/HotelList';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({
  className = ''
}: MainPageProps) => {
  return (
    <div className={`${className} bg-[#F4F4F4] min-h-screen flex`}>
      <SearchPanel />
      <HotelList />
    </div>
  );
};
