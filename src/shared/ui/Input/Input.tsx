import type { FC, InputHTMLAttributes, RefAttributes } from 'react';
import React from 'react';

export enum InputTheme {
  PRIMARY = 'w-full border border-[##C9CACC] rounded'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: InputTheme;
  title: string;
}

export const Input: FC<RefAttributes<HTMLInputElement> & InputProps> =
  React.forwardRef<HTMLInputElement, InputProps>(function Input(
    { theme = InputTheme.PRIMARY, title, ...otherProps },
    ref
  ) {
    return (
      <div className="flex flex-col gap-[7px]">
        <label className="font-sans text-xs">{title}</label>
        <input className={theme} {...otherProps} ref={ref} />
      </div>
    );
  });
