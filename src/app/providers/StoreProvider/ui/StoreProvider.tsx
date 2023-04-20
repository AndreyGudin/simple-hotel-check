import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '..';

interface StoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
  const { children } = props;
  const store = createReduxStore();
  return <Provider store={store}>{children}</Provider>;
};
