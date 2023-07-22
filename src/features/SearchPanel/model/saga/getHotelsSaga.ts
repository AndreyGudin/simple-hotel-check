import { put } from 'redux-saga/effects';

import type { PutEffect } from 'redux-saga/effects';

import { getHotelsApi } from '../api/getHotelsApi';
import { hotelsActions } from '../slice/hotelsSlice';
import type { Hotel } from '../types/HotelResponse';
import type { PayloadAction } from '@reduxjs/toolkit';

export function* getHotelsSaga({
  payload
}: PayloadAction<{
  city: string;
  checkIn: string;
  checkOut: string;
}>): Generator<
  | Promise<Hotel[]>
  | PutEffect<{
      payload: any;
      type: 'hotels/save';
    }>
  | PutEffect<{ payload: boolean; type: 'hotels/setIsLoading' }>,
  void,
  Hotel[]
> {
  yield put(hotelsActions.setIsLoading(true));
  const result: Hotel[] = yield getHotelsApi(
    payload.city,
    payload.checkIn,
    payload.checkOut
  );
  yield put(hotelsActions.save(result));
  yield put(hotelsActions.setIsLoading(false));
}
