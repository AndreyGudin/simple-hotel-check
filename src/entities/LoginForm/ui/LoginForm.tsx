/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useForm } from 'react-hook-form';

import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

interface UserData {
  login: string;
  password: string;
}

export const LoginForm: FC<LoginFormProps> = ({
  className = ''
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<UserData> = (data) => {
    console.log(data);
  };

  return (
    <form className={`${className}`} onSubmit={handleSubmit(onSubmit)}>
      <Input title="Логин" {...register('login')} />
      <Input title="Пароль" {...register('password', { required: true })} />
      {errors.password && <span>This field is required</span>}
      <Button type="submit">Войти</Button>
    </form>
  );
};
