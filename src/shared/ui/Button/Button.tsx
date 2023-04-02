import type { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
  PRIMARY = ''
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { theme = ButtonTheme.PRIMARY, children, ...otherProps } = props;
  return (
    <button
      className={`${theme} btn text-white w-[116px] h-[34px] rounded-md`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
