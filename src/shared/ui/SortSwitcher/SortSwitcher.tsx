import { FC, useState } from 'react';

interface SortSwitcherProps {
  className?: string;
  text: string;
  active?: boolean;
}

export const SortSwitcher: FC<SortSwitcherProps> = ({
  className = '',
  text,
  active = true
}: SortSwitcherProps) => {
  const [direction, setDirection] = useState(true);
  const enabledStyle =
    'border-[#41522E] border rounded w-fit px-2 py-1 text-[#41522E] flex items-center gap-1 cursor-pointer';
  const disabledStyle =
    'border-[#E5E5E5] border rounded w-fit px-2 py-1 text-[#99A0A3] flex items-center gap-1 cursor-pointer';
  const enabledArrow = active && direction ? '#41522E' : '#99A0A3';
  const downArrow = direction ? '#99A0A3' : '#41522E';
  const currentStyle = active ? enabledStyle : disabledStyle;

  const handleClick = (): void => {
    setDirection((state) => !state);
  };

  return (
    <div className={`${className} ${currentStyle}`} onClick={handleClick}>
      {text}
      <div
        className={`before:block before:w-[8px] before:h-[8px] before:border-l-[2px] before:border-t-[2px] before:border-[${downArrow}] before:rotate-45 after:block after:w-[8px] after:h-[8px] after:border-r-[2px] after:border-b-[2px] after:border-[${enabledArrow}] after:rotate-45`}
      />
    </div>
  );
};
