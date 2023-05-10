import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { Input, TitleTheme } from '../../../shared/ui/Input/Input';
import { Button } from '../../../shared/ui/Button/Button';
import { getHotels, hotelsActions } from '../model/slice/hotelsSlice';

import type { SearchData } from '../model/types/HotelsSchema';
import { getCheckOutDate } from '../model/lib/getCheckOutDate';

interface SearchPanelProps {
  className?: string;
}

export const SearchPanel: FC<SearchPanelProps> = ({
  className = ''
}: SearchPanelProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchData>({ mode: 'onChange' });
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<SearchData> = ({ checkIn, count, city }) => {
    const checkOutDate = getCheckOutDate(checkIn, count);
    dispatch(getHotels(city, checkIn, checkOutDate));
    dispatch(
      hotelsActions.book({
        checkIn,
        count,
        city
      })
    );
  };

  return (
    <div
      className={`w-[360px] h-[410px] bg-white rounded-md p-8 flex flex-col gap-8`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          title="Локация"
          titleTheme={TitleTheme.BOLD_TITLE}
          {...register('city', { required: true })}
        />
        {errors.city && <span>This field is required</span>}
        <Input
          title="Дата заселения"
          type="date"
          titleTheme={TitleTheme.BOLD_TITLE}
          {...register('checkIn', { required: true })}
        />
        {errors.checkIn && <span>This field is required</span>}
        <Input
          title="Количество дней"
          type="number"
          titleTheme={TitleTheme.BOLD_TITLE}
          {...register('count', { required: true })}
        />
        {errors.count && <span>This field is required</span>}
        <Button type="submit">Найти</Button>
      </form>
    </div>
  );
};
