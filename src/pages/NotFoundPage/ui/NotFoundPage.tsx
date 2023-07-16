import { memo } from 'react';
import type { FC } from 'react';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(
  ({ className = '' }: NotFoundPageProps) => {
    return (
      <div className={`${className} text-5xl text-red-600`}>Page not found</div>
    );
  }
);
