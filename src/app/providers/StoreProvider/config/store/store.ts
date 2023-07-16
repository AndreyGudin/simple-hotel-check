import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import type { StateSchema } from './StateSchema';
import { sagas } from '../saga/saga';
import { userReducer } from '@/entities/User';
import { likedReducer } from '@/widget/LikeButton';
import { hotelsReducer } from '@/features/SearchPanel';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState?: StateSchema) {
  const sagaMiddleware = createSagaMiddleware();
  // const middleware = [sagaMiddleware];
  const store = configureStore({
    reducer: {
      hotels: hotelsReducer,
      favorite: likedReducer,
      user: userReducer
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
    devTools: true
  });
  sagaMiddleware.run(sagas);
  return store;
}
