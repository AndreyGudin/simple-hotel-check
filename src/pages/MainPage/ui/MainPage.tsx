import type { FC } from 'react';
import { RatingStars } from '../../../widget/RatingStars';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({
  className = ''
}: MainPageProps) => {
  return (
    <div className={`${className}`}>
      <RatingStars />
    </div>
  );
};
