import type { FC } from 'react';

import { NavBar } from '@/widget/NavBar/ui/NavBar';
import { SearchPanel } from '@/features/SearchPanel/ui/SearchPanel';
import { Favorite } from '@/features/Favorite/ui/Favorite';
import { HotelList } from '@/features/DisplayHotels/ui/HotelList/HotelList';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = ({ className = '' }: MainPageProps) => {
  return (
    <div className={`${className} bg-[#F4F4F4] min-h-screen flex flex-col `}>
      <NavBar />
      <div className="flex gap-6 flex-wrap justify-center">
        <div className="flex flex-col gap-6">
          <SearchPanel />
          <Favorite />
        </div>

        <HotelList />
      </div>
    </div>
  );
};

export default MainPage;
