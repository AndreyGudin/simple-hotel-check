import type { FC } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({
  className = ''
}: LoginFormProps) => {
  return (
    <div className={`${className}`}>
      <Input title="Логин" name="user" />
      <Input title="Пароль" type={'password'} name="password" />
      <Button>Войти</Button>
    </div>
  );
};
