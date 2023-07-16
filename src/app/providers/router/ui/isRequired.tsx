import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import { getAuthUserData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routerConfig/routerConfig';

export const RequireAuth = ({
  children
}: {
  children: JSX.Element;
}): JSX.Element => {
  const authData = useSelector(getAuthUserData);
  const location = useLocation();

  if (authData === undefined) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return children;
};
