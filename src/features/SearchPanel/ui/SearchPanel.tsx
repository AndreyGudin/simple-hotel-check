import type { FC } from 'react';
import { Input, TitleTheme } from '../../../shared/ui/Input/Input';
import { Button } from '../../../shared/ui/Button/Button';

interface SearchPanelProps {
  className?: string;
}

export const SearchPanel: FC<SearchPanelProps> = ({
  className = ''
}: SearchPanelProps) => {
  return (
    <div
      className={`w-[360px] h-[410px] bg-white rounded-md p-8 flex flex-col gap-8`}
    >
      <div className="flex flex-col gap-4">
        <Input title="Локация" titleTheme={TitleTheme.BOLD_TITLE} />
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
      <Button>Найти</Button>
    </div>
  );
};
