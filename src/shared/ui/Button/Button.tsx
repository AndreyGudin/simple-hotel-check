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
      className={`${theme} btn text-white w-full h-[50px] rounded-md`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
