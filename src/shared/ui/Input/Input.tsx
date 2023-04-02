import type { FC, InputHTMLAttributes } from 'react';

export enum InputTheme {
  PRIMARY = 'text-red-200'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: InputTheme;
  title: string;
}

export const Input: FC<InputProps> = (props: InputProps) => {
  const {
    theme = InputTheme.PRIMARY,
    name,
    type = 'text',
    title,
    ...otherProps
  } = props;
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={`${theme}`}
        {...otherProps}
      />
    </div>
  );
};
