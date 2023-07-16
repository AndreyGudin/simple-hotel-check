import { userActions } from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo(
  ({ className = '' }: NavBarProps) => {
    const dispatch = useDispatch();

    const handleLogOut = useCallback(() => {
      dispatch(userActions.logout());
    }, [dispatch]);

    return (
      <nav className={`${className} flex justify-between p-8`}>
        <Text text="Simple Hotel Check" theme={TextTheme.VeryBig} />
        <Button theme={ButtonTheme.CLEAR} onClick={handleLogOut}>
          Выйти
        </Button>
      </nav>
    );
  }
);
