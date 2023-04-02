import type { FC, InputHTMLAttributes } from 'react';

export enum InputTheme {
  PRIMARY = 'text-red-200'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: InputTheme;
}

export const Input: FC<InputProps> = (props: InputProps) => {
  const { theme = InputTheme.PRIMARY, type = 'text', ...otherProps } = props;
  return (
    <>
      <input
        type={type}
        name="user"
        id="user"
        className={`${theme}`}
        {...otherProps}
      />
    </>
  );
};
