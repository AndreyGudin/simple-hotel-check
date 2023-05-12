import type { FC } from 'react';

export enum TextTheme {
  Small = 'text-[11px] text-[#878787]',
  Light = 'text-sm text-[#878787]',
  Normal = 'text-[17px] text-[#424242]',
  Big = 'text-[24px] text-[#41522E]',
  VeryBig = 'text-[32px] text-[#424242]'
}

interface TextProps {
  className?: string;
  theme?: TextTheme;
  text?: string;
}

export const Text: FC<TextProps> = ({
  className = '',
  theme = TextTheme.Normal,
  text = ''
}: TextProps) => {
  return <span className={`${className} ${theme}`}>{text}</span>;
};
