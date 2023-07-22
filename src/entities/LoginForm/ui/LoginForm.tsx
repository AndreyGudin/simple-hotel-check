import { useForm } from 'react-hook-form';

import { useEffect, type FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { type User, userActions, getAuthUserData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({
  className = ''
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({ mode: 'onChange' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector(getAuthUserData);

  const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(userActions.setAuthData(data));
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/main');
  };

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  useEffect(() => {
    if (authData) {
      navigate('/main');
    }
  }, [authData, navigate]);

  return (
    <form
      className={`${className} w-[409px] min-h-[382px] flex flex-col gap-8 bg-white rounded-2xl justify-center p-8`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-base text-center">Simple Hotel Check</h2>
      <div className="flex flex-col gap-6">
        <Input title="Логин" {...register('username', { required: true })} />
        {errors.username && (
          <Text theme={TextTheme.Error} text="This field is required" />
        )}
        <Input title="Пароль" {...register('password', { required: true })} />
        {errors.password && (
          <Text theme={TextTheme.Error} text="This field is required" />
        )}
      </div>
      <Button type="submit">Войти</Button>
    </form>
  );
};
