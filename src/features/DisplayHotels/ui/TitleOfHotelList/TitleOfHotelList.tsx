import { useSelector } from 'react-redux';
import type { FC } from 'react';

import { Text, TextTheme } from '../../../../shared/ui/Text/Text';
import { getHotelsSearchData } from '../../../SearchPanel/model/selectors/getHotelsSearchData/getHotelsSearchData';

interface TitleOfHotelListProps {
  className?: string;
}

export const TitleOfHotelList: FC<TitleOfHotelListProps> = ({
  className = ''
}: TitleOfHotelListProps) => {
  const searchData = useSelector(getHotelsSearchData);
  const date = searchData.checkIn ? new Date(searchData.checkIn) : new Date();
  const dateFormatter = new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedDate = dateFormatter.format(date);
  return (
    <div className={`${className} flex items-center justify-between`}>
      <div className="flex gap-5 items-center">
        <Text text="Отели" theme={TextTheme.VeryBig} />
        <div className="rotate-45 w-[12px] h-[12px] border-t-4 border-r-4 border-solid border-[#A7A7A7]" />
        <Text text={searchData.city} theme={TextTheme.VeryBig} />
      </div>
      <Text text={formattedDate ?? ''} theme={TextTheme.Big} />
    </div>
  );
};
