import { useState } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Input, TitleTheme } from '../../../shared/ui/Input/Input';
import { Button } from '../../../shared/ui/Button/Button';
import { getHotels } from '../model/slice/hotelsSlice';

interface SearchPanelProps {
  className?: string;
}

export const SearchPanel: FC<SearchPanelProps> = ({
  className = ''
}: SearchPanelProps) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('Moscow');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = (e.target as HTMLInputElement).value;
    setCity(value);
  };

  return (
    <div
      className={`w-[360px] h-[410px] bg-white rounded-md p-8 flex flex-col gap-8`}
    >
      <div className="flex flex-col gap-4">
        <Input
          onChange={handleChange}
          title="Локация"
          titleTheme={TitleTheme.BOLD_TITLE}
          value={city}
        />
        <Input
          title="Дата заселения"
          type="date"
          titleTheme={TitleTheme.BOLD_TITLE}
        />
        <Input
          title="Количество дней"
          type="number"
          titleTheme={TitleTheme.BOLD_TITLE}
        />
      </div>
      <Button
        onClick={() => {
          console.log('click');
          dispatch(getHotels(city));
        }}
      >
        Найти
      </Button>
    </div>
  );
};
