import type { FC } from 'react';
import { LoginForm } from '@/entities/LoginForm';

const LoginPage: FC = () => {
  return (
    <div
      className={`login-background h-screen flex justify-center items-center before:block before:bg-no-repeat before:bg-cover before:h-screen before:absolute before:left-0 before:right-0 before:z-[-1] before:opacity-50 before:blur-sm`}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;