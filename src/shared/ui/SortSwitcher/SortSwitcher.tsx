import { useEffect, useState } from 'react';
import type { FC } from 'react';

interface SortSwitcherProps {
  className?: string;
  text: string;
  active?: boolean;
  onSort?: (type: 'asc' | 'desc') => void;
}

export const SortSwitcher: FC<SortSwitcherProps> = ({
  className = '',
  onSort = () => {},
  text,
  active = false
}: SortSwitcherProps) => {
  const [direction, setDirection] = useState(true);
  const enabledStyle =
    'border-[#41522E] border rounded w-fit px-2 py-1 text-[#41522E] flex items-center gap-[9px] cursor-pointer';
  const disabledStyle =
    'border-[#E5E5E5] border rounded w-fit px-2 py-1 text-[#99A0A3] flex items-center gap-[9px] cursor-pointer';
  const downArrow = active
    ? direction
      ? 'after:border-[#41522E]'
      : 'after:border-[#41522E]/30'
    : 'after:border-[#41522E]/30';
  const upArrow = active
    ? direction
      ? 'before:border-[#41522E]/30'
      : 'before:border-[#41522E]'
    : 'before:border-[#41522E]/30';
  const currentStyle = active ? enabledStyle : disabledStyle;

  const handleClick = (): void => {
    if (direction) onSort('desc');
    else onSort('asc');
    setDirection((direction) => !direction);
  };

  useEffect(() => {
    if (!active) setDirection(true);
  }, [active]);

  return (
    <div className={`${className} ${currentStyle}`} onClick={handleClick}>
      {text}
      <div
        className={`before:block before:w-[8px] before:h-[8px] before:border-l-[2px] before:border-t-[2px] ${upArrow} before:rotate-45 after:block after:w-[8px] after:h-[8px] after:border-r-[2px] after:border-b-[2px] ${downArrow} after:rotate-45`}
      />
    </div>
  );
};
