import type { FC } from 'react';

export enum TextSize {
  Small = 'text-[11px] text-[#878787]',
  Light = 'text-sm text-[#878787]',
  Normal = 'text-[17px] text-[#424242]',
  Big = 'text-[24px] text-[#41522E]',
  VeryBig = 'text-[32px] text-[#424242]'
}

export enum TextTheme {
  Normal = 'font-light',
  Error = 'text-red-600 font-bold'
}

interface TextProps {
  className?: string;
  size?: TextSize;
  theme?: TextTheme;
  text?: string;
}

export const Text: FC<TextProps> = ({
  className = '',
  size = TextSize.Normal,
  theme = TextTheme.Normal,
  text = ''
}: TextProps) => {
  return <span className={`${theme} ${className} ${size}`}>{text}</span>;
};
