import type { RouteProps } from 'react-router-dom';

import { MainPage } from '../../../pages/MainPage';
import { LoginPage } from '../../../pages/LoginPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  LOGIN = 'login',
  MAIN = 'main',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.LOGIN]: '/',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    authOnly: true
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
