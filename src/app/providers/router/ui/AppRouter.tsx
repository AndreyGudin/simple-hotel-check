import { Suspense, memo, useCallback } from 'react';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '@/app/providers/router/ui/isRequired';
import {
  type AppRoutesProps,
  routeConfig
} from '@/shared/config/routerConfig/routerConfig';

export const AppRouter: FC = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly !== undefined && route.authOnly ? (
            <RequireAuth>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
