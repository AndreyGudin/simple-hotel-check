import type { FC } from 'react';
import { LikeButton } from '../../../widget/LikeButton';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({
  className = ''
}: MainPageProps) => {
  return (
    <div className={`${className}`}>
      <LikeButton />
    </div>
  );
};
