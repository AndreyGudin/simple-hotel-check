import { configureStore } from '@reduxjs/toolkit';

import type { StateSchema } from './StateSchema';
import { hotelsReducer } from '../../../../../features/SearchPanel';
import createSagaMiddleware from 'redux-saga';
import { sagas } from '../saga/saga';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState?: StateSchema) {
  const sagaMiddleware = createSagaMiddleware();
  // const middleware = [sagaMiddleware];
  const store = configureStore({
    reducer: { hotels: hotelsReducer },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
    devTools: true
  });
  sagaMiddleware.run(sagas);
  return store;
}
