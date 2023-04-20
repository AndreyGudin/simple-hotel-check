import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import { GET_HOTELS, getHotelsSaga } from '../../../../../features/SearchPanel';

export const sagaMiddleware = createSagaMiddleware();

export function* sagas(): Generator {
  yield takeEvery(GET_HOTELS, getHotelsSaga);
}
