import type { FC, InputHTMLAttributes, RefAttributes } from 'react';
import React from 'react';

export enum InputTheme {
  PRIMARY = 'w-full border border-[#C9CACC] rounded'
}

export enum TitleTheme {
  BOLD_TITLE = 'font-bold',
  LIGHT_TITLE = 'font-light'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: InputTheme;
  title: string;
  titleTheme?: TitleTheme;
}

export const Input: FC<RefAttributes<HTMLInputElement> & InputProps> =
  React.forwardRef<HTMLInputElement, InputProps>(function Input(
    {
      theme = InputTheme.PRIMARY,
      title,
      titleTheme = TitleTheme.LIGHT_TITLE,
      ...otherProps
    },
    ref
  ) {
    return (
      <div className="flex flex-col gap-[7px]">
        <label
          className={`font-[Roboto] text-[#424242] ${titleTheme} text-base `}
        >
          {title}
        </label>
        <input
          className={`${theme} h-[50px] pl-[15px] pr-[9px]`}
          {...otherProps}
          ref={ref}
        />
      </div>
    );
  });
