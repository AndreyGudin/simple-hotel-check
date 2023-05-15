import type { FC } from 'react';
// import { RatingStars } from '../../../widget/RatingStars';
import { SearchPanel } from '../../../features/SearchPanel/ui/SearchPanel';
import { HotelList } from '../../../features/DisplayHotels/ui/HotelList/HotelList';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { Favorite } from '../../../features/Favorite/ui/Favorite';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({
  className = ''
}: MainPageProps) => {
  return (
    <div className={`${className} bg-[#F4F4F4] min-h-screen flex flex-col`}>
      <div className="flex justify-between">
        <Text text="Simple Hotel Check" theme={TextTheme.VeryBig} />
        <Button theme={ButtonTheme.CLEAR}>Выйти</Button>
      </div>
      <div className="flex gap-6 flex-wrap">
        <div className="flex flex-col gap-6">
          <SearchPanel />
          <Favorite />
        </div>

        <HotelList />
      </div>
    </div>
  );
};
