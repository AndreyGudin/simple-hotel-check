import type { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
  PRIMARY = 'text-4xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { theme = ButtonTheme.PRIMARY, children, ...otherProps } = props;
  return (
    <button className={theme} {...otherProps}>
      {children}
    </button>
  );
};
